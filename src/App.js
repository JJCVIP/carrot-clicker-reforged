//React Hooks
import { useState, useCallback, useEffect, useRef } from 'react';

//React Components
import StatusBar from './React-Components/StatusBar';
import GameSection from './React-Components/GameSection';
import CharacterSection from './React-Components/CharacterSection';
import GameInfoBox from './React-Components/GameInfoBox';
import ToastContainer from './ToastContainer'

//import objects
import { default_settings, default_Boomer_Bill, default_Greg, default_Belle_Boomerette, default_Charles, default_Jared } from './defaultObjects.mjs';
import PlayerClass from './classes/Player.mjs'

//functions
import { DisplayRounded, getLevelPrice } from './carrot_utilities.mjs';
import Character from './classes/Character.mjs';
import PriceArray from './classes/PriceArray.mjs';
import PopupMenu from './React-Components/popup/PopupMenu';

let toastID = 0;


function App() {
    // User interface
    const [menu, setMenu] = useState(false); // Popup menu
    const [menuProps, setMenuProps] = useState({}); // Popup menu
    function dialog(title="Title", description="Description", buttonName="OK", buttonStyle, button_action) {
        setMenuProps({ title, description, buttonName, buttonStyle, button_action });
        setMenu("dialog");
    }

    // Toasts
    const [toasts, setToasts] = useState({});
    function toast(data={}) {
        let modified = {...toasts};
        modified[toastID] = data;
        setToasts(modified);
        toastID++;

        console.log(toasts);

        return toastID;
    }
    function closeToast(id) {
        if(toasts[id] === undefined) return;
        let modified = {...toasts};
        delete modified[id];
        setToasts(modified);
    }

    /*-----setting State objects-----*/
    const [Player, setPlayer] = useState(new PlayerClass());
    const [Settings, setSettings] = useState(default_settings);

    /** Set theme */
    function setTheme(theme="theme_dark") {
        setSettings({...Settings, theme});
    }

    // Multibuy
    //   const mbValues = [1,10,100];
    //   const [mbIndex, setMbIndex] = useState(0);
    //   let multibuy = mbValues[mbIndex]; // Final multiplier
    //   const multibuySpin = function() {
    //     setMbIndex((mbIndex+1) % mbValues.length);
    //     multibuy = mbValues[mbIndex];

    //     console.log(multibuy);

    //     // Tutorial message
    //     // if(player.flags['tutorial_multibuy'] !== true) {
    //     //     toast(...toasts.tutorial_multibuy);
    //     //     player.flags['tutorial_multibuy'] = true;
    //     // }
    //   }


    // Characters
    const [Boomer_Bill, setBoomer_Bill] = useState(default_Boomer_Bill);
    const [Belle_Boomerette, setBelle_Boomerette] = useState(default_Belle_Boomerette)
    const [Greg, setGreg] = useState(default_Greg);
    const [Charles, setCharles] = useState(default_Charles);
    const [Jared, setJared] = useState(default_Jared)

    // Character hashmap object to access the right characters setter
    const characterMap = {
        Boomer_Bill: setBoomer_Bill,
        Belle_Boomerette: setBelle_Boomerette,
        Greg: setGreg
    }

    /** Sets an event loop to update carrots at 20fps */
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPlayer((prevPlayer) => ({
                ...prevPlayer,
                carrots: prevPlayer.carrots + (prevPlayer.cps / 20),
            }));
        }, 50);

        return () => clearInterval(intervalId);
    }, [])

    // On mount (Tutorial)
    useEffect(() => {
        let ttID, ctID;

        // Cookie usage notification
        if(Player.flags['cookies_accepted'] !== true) {
            ctID = toast({
                title: 'Cookies & Privacy',
                desc: <>By clicking accept you agree to the usage of cookies to save your progress. If you choose not to click accept your progress will not be saved. <a href="https://www.notkal.com/about/#privacy" target="_blank" rel="noreferrer">Privacy Policy</a></>,
                color: 'purple',
                persistent: true,
                // replaceable: false,
                // achievement: false,
                hide_close: true,
                buttons: [
                    {
                        name: 'Accept',
                        action: () => {
                            Player.flags['cookies_accepted'] = true;
                            // saveGame();
                        },
                        closes: true
                    }
                ]
            });
        }
        
        // Tutorial message
        if(Player.flags.tutorial0 !== true) {
            ttID = toast({
                title: "Welcome to Carrot Clicker!",
                desc: "Click the carrot to farm. Spend your carrots on hiring/upgrading new workers. Eventually you will be able to buy them better tools to work with. Good luck!",
                tutorial: true,
                persistent: true
            });
            Player.flags.tutorial0 = true;
        }

        // Keydown
        const onKeydown = (event) => {
            const key = event.key.toUpperCase();
            console.log(key);
        }

        document.addEventListener('keydown', onKeydown);

        // Unmount
        return () => {
            document.removeEventListener('keydown', onKeydown);
            closeToast(ttID);
            closeToast(ctID);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /** Updates the Players Carrots per Click based on Bill, Charles, and Jared items
     * @returns {NUll}
     * @version 1.0
     * @todo Add Charles modifiers and Jared Items
     */
    const updateCPC = useCallback(() => {
        //Calculates the tool Modifier
        const hoeModifier = 1 + Boomer_Bill.Hoes.map((hoe, index) => hoe * Math.pow(10, index)).reduce((a, b) => a + b);

        //creates new Carrots per click Value
        const newCPC = Boomer_Bill.lvl * hoeModifier;
        setPlayer(prevPlayer => ({ ...prevPlayer, cpc: newCPC }))
    }, [Boomer_Bill.lvl, Boomer_Bill.Hoes])

    // Looks to see if dependencies change to update carrots per second
    useEffect(() => {
        updateCPC();
    }, [updateCPC, Boomer_Bill.lvl, Boomer_Bill.Hoes])

    /** The function that rewards the player with carrots
     * @param {Number} amount carrots earned
     * @param {String} type Either cpc, cps, or bonus
     * @param {Boolean} useMousePos used for falling carrots
     * @returns {Null}
     * @version 1.0
     */
    function earnCarrots(amount, type, useMousePos=false) {
        // Object deconstruction updating Player object
        setPlayer({
            ...Player,
            carrots: Player.carrots + amount,
            prestige: {
                ...Player.prestige,
                carrots: Player.prestige.carrots + amount,
                [`${type}_carrots`]: (Player.prestige[`${type}_carrots`] || 0) + amount,
                clicks: type === "cpc" ? Player.prestige.clicks + 1 : Player.prestige.clicks
            },
            lifetime: {
                ...Player.lifetime,
                carrots: Player.lifetime.carrots + amount,
                [`${type}_carrots`]: (Player.lifetime[`${type}_carrots`] || 0) + amount,
                clicks: type === "cpc" ? Player.lifetime.clicks + 1 : Player.lifetime.clicks
            },
        });

        // Bonus
        //if(type === 'bonus') popupHandler(useMousePos, DisplayRounded(amount, 1), 'falling');
    }

    /**
     * 
     * @param {Character} character object 
     * @param {Number} amount 
     * @version 1.0
     * @returns {Null}
     */
    function levelUp(character, amount) {
        //Gets the level up price of the character
        const totalCost = getLevelPrice(character, amount, null, null);

        //if the Player does not have enough carrots immedietly return;
        if (Player.carrots < totalCost) return;

        //character setter, need character.name the incode refrence name for the hashmap
        characterMap[character.name](
            { ...character, lvl: character.lvl + amount }
        )

        //sets the players carrots
        setPlayer(
            { ...Player, carrots: Player.carrots -= totalCost }
        )


        //temp setPlayerCpc
        setPlayer(
            { ...Player, cpc: Boomer_Bill.lvl + 1 }
        )
    }

    /**
     * 
     * @param {Character} character to be equipped
     * @param {Number} tool index 0->5
     * @param {Number} amount 
     * @version 1.1
     * @returns {Null}
     */
    function equipTool(character, tool, amount) {
        //If Greg does not have the number of tools that are being requested then return
        if ((isNaN(Greg.Hoes[tool]) !== (typeof (Greg.Hoes[tool]) != 'number')) || Greg.Hoes[tool] < amount) return;

        //character setter, need character.name the incode refrence name for the hashmap
        characterMap[character.name](
            { ...character, Hoes: (character.Hoes.toSpliced(tool, 1, character.Hoes[tool] + amount)) }
        );

        //updates Gregs hoes
        setGreg({ ...Greg, Hoes: Greg.Hoes.toSpliced(tool, 1, Greg.Hoes[tool] - amount) })
    }
    /**
     * Buys a tool for Greg
     * @param {Character} structural_dummy to pair with equipHoe structure
     * @param {Number} tool 
     * @param {Number} amount 
     * @version 1.0
     * @returns {Null}
     */
    function buyTool(structural_dummy, tool, amount) {
        if ((Player.carrots < Greg.HoePrices[tool]) || (Greg.lvl > Greg.Hoes[tool] + amount)) return;
        //adds Gregs Hoes
        setGreg({ ...Greg, Hoes: Greg.Hoes.toSpliced(tool, 1, Greg.Hoes[tool] + amount) })
    }

    //JSX
    return (
        <div id="app" className={Settings.theme}>
            {/* Toast notifications */}
            <ToastContainer toasts={toasts} setToasts={setToasts} closeToast={closeToast} />

            {/* Status Bar */}
            <StatusBar player={Player} settings={Settings} setMenu={setMenu} />

            {/* Game section and Characters */}
            <div id="container" className="flex">
                <div id="home" className="anchor_offset"></div>

                {/* The Game Section */}
                <GameSection
                    Player={Player} earnCarrots={earnCarrots}
                    setMenu={setMenu} dialog={dialog}
                />
                {/* Characters */}
                <div id="characters" className="anchor_offset"></div>
                <CharacterSection
                    Bill={Boomer_Bill} Belle={Belle_Boomerette} Greg={Greg}
                    levelUp={levelUp} equipTool={equipTool} buyTool={buyTool}
                // multibuy={multibuy} multibuySpin={multibuySpin}
                />
            </div>

            {/* Overlays */}
            {menu === false ? null :
                <PopupMenu menu={menu} setMenu={setMenu} params={menuProps}
                    Player={Player} Settings={Settings} setTheme={setTheme}
                />
            }
        </div>
    );
}

export default App;
