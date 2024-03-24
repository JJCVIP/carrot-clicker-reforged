import './App.css';

//React Hooks
import { useState, useCallback, useEffect, useRef } from 'react';

//React Components
import StatusBar from './React-Components/StatusBar';
import GameSection from './React-Components/GameSection';
import CharacterSection from './React-Components/CharacterSection';
import GameInfoBox from './React-Components/GameInfoBox';

//import objects
import { default_player, default_settings, default_Boomer_Bill, default_Greg, default_Belle_Boomerette} from './defaultObjects.mjs';

//functions
import { DisplayRounded, getLevelPrice } from './carrot_utilities.mjs';
import Character from './classes/Character.mjs';


function App() {
  /*-----setting State objects-----*/
  const [Player, setPlayer]     = useState(default_player);
  const [Settings, setSettings] = useState(default_settings);

  //characters
  const [Boomer_Bill, setBoomer_Bill] = useState(default_Boomer_Bill);
  const [Belle_Boomerette, setBelle_Boomerette] = useState(default_Belle_Boomerette)
  const [Greg, setGreg] = useState(default_Greg);

  //Charcater hashmap object to access the right characters setter
  const characterMap = {
    Boomer_Bill : setBoomer_Bill,
    Belle_Boomerette : setBelle_Boomerette
  }
  
  /**
   * Updates the Players Carrots per Click based on Bill, Charles, and Jared items
   * @returns {NUll}
   * @version 1.0
   * @todo Add Charles modifiers and Jared Items
   */
  const updateCPC = useCallback(()=>{
    //Calculates the tool Modifier
    const hoeModifier = 1+Boomer_Bill.Hoes.map((hoe,index) => hoe*Math.pow(10,index)).reduce((a,b) => a+b);

    //creates new Carrots per click Value
    const newCPC = Boomer_Bill.lvl*hoeModifier;
    setPlayer(prevPlayer =>({...prevPlayer,cpc:newCPC}))
  },[Boomer_Bill.lvl,Boomer_Bill.Hoes])

  //Looks to see if dependencies change to update carrots per second
  useEffect(()=>{
    updateCPC();
  },[updateCPC,Boomer_Bill.lvl,Boomer_Bill.Hoes])

  /**
   * The function that rewards the player with carrots
   * @param {Number} amount carrots earned
   * @param {String} type Either cpc, cps, or bonus
   * @param {Boolean} useMousePos used for falling carrots
   * @version 1.0
   */
  function earnCarrots(amount, type, useMousePos = false) {
    //object deconstruction updating Player object
    setPlayer({
      ...Player,
      carrots: Player.carrots + amount,
      prestige: {
        ...Player.prestige,
        carrots: Player.prestige.carrots + amount,
        [`${type}_carrots`]: (Player.prestige[`${type}_carrots`] || 0) + amount,
        clicks: type==="cpc" ? Player.prestige.clicks+1 : Player.prestige.clicks
      },
      lifetime: {
        ...Player.lifetime,
        carrots: Player.lifetime.carrots + amount,
        [`${type}_carrots`]: (Player.lifetime[`${type}_carrots`] || 0) + amount,
        clicks:type==="cpc" ? Player.lifetime.clicks+1 : Player.lifetime.clicks
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
   * @returns 
   */
  function levelUp(character,amount){
    //Gets the level up price of the character
    const totalCost=getLevelPrice(character,amount,null,null);

    //if the Player does not have enough carrots immedietly return;
    if(Player.carrots<totalCost) return;

    //character setter, need character.name the incode refrence name for the hashmap
    characterMap[character.name](
      {...character, lvl:character.lvl+amount}
    )

    //sets the players carrots
    setPlayer(
      {...Player, carrots:Player.carrots-=totalCost}
    )


    //temp setPlayerCpc
    setPlayer(
      {...Player, cpc:Boomer_Bill.lvl+1}
    )
  }

  /**
   * 
   * @param {Character} character to be equipped
   * @param {Number} tool index 0->5
   * @param {Number} amount 
   * @version 1.0
   * @returns 
   */
  
  function equipTool(character,tool,amount){
    //If Greg does not have the number of tools that are being requested return
    if(Greg.Hoes[tool]<amount) return;

    //character setter, need character.name the incode refrence name for the hashmap
    characterMap[character.name](
      {...character, Hoes:(character.Hoes.toSpliced(tool,1,character.Hoes[tool]+amount))}
    );

    //updates Gregs hoes
    setGreg({...Greg, Hoes:Greg.Hoes.toSpliced(tool,1,Greg.Hoes[tool]-amount)})
  }

  //JSX
  return (
    <div className="App">
      <StatusBar player={Player} settings={Settings}/>

      {/* Game section and Characters */}
      <div id="container" className="flex">
        <div id="home" className="anchor_offset"></div>

        {/* The Game Section */}
        <GameSection Player={Player} earnCarrots={earnCarrots}/>
        {/* Characters */}
        <div id="characters" className="anchor_offset"></div>
        <CharacterSection Bill={Boomer_Bill} Belle={Belle_Boomerette} Greg={Greg} levelUp={levelUp} equipTool={equipTool}/>
      </div>
    </div>
  );
}

export default App;
