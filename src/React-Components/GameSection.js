import React from "react"
//react
import { useEffect, useState, useCallback, useRef } from "react";

//react components
import GameInfoBox from "./GameInfoBox";
import GameButton from "./GameButton";

//functions
import { DisplayRounded } from "../carrot_utilities.mjs";

export default function GameSection({Player, earnCarrots, setMenu, dialog, settings={}, cosmeticData={}}) {
    // Store click speed
    const [clickSpeed, setClickSpeed] = useState(0);
    const [bestClickSpeed, setBestClickSpeed] = useState(0);
    const [clickArray, setClickArray] = useState([]);
    const clickSpeedInterval = useRef(null);

    /** Click speed handler function
     * @param {boolean} clicked 
     */
    const clickSpeedHandler= useCallback((clicked = false) => {
        if(clicked) clickArray.push(Date.now());

        // Purge clicks older than 1 second
        for(let i = 0; i < clickArray.length; i++) {
            if(clickArray[i] < Date.now() - 3000) {
                // Check if there is only 1 left or not because splice doesn't work with arrays with 1 value
                if(clickArray.length !== 1) setClickArray(clickArray.toSpliced(i,i))
                else setClickArray([]);
            };
        }
        setClickSpeed(Math.floor(clickArray.length / 3)); // Update click speed
        if(bestClickSpeed < clickSpeed) setBestClickSpeed(clickSpeed);
        if(bestClickSpeed > Player.clickSpeedRecord) Player.clickSpeedRecord = bestClickSpeed; // Record
        if(clickSpeed === 0) setBestClickSpeed(0); // Reset best on 0

    },[Player, bestClickSpeed, clickArray, clickSpeed])

    useEffect(()=>{
        clickSpeedInterval.current = setInterval(clickSpeedHandler, 1000);
        return () => clearInterval(clickSpeedInterval.current);
    },[clickSpeedHandler])

    function popupHandler(amount,useMousePos=true, style= 'carrot'){
        console.log("hi");
        const element = React.createElement('div', null, "hello")
    }

//     /** Click number popup
//  * @param {boolean} useMousePos 
//  * @param {string} amount 
//  * @param {string} style Styling to be applied
//  */
// //#region 
// function popupHandler(useMousePos = true, amount, style = 'carrot') {
//     var clickVisualElement = document.createElement("div"); // Create Element
//     let [randomX, randomY] = [randomOffset() + mouseX, randomOffset() + mouseY]; // Give element random displacement along with mouse position

//     // Get position of carrot image (used when useMousePos is false)
//     var mcPosition = mainCarrot.getBoundingClientRect();
//     var fixedX = randomOffset() + (mcPosition.left + (mcPosition.right - mcPosition.left) / 2);
//     var fixedY = randomOffset() + mcPosition.bottom - 12;

//     if(useMousePos) {
//         clickVisualElement.style.left = randomX + "px";
//         clickVisualElement.style.top =  randomY + "px";
//     } else {
//         clickVisualElement.style.left = fixedX + "px";
//         clickVisualElement.style.top =  fixedY + "px";
//     }

//     clickVisualElement.classList.add("clickvisual");
//     clickVisualElement.id = `bonus${bonusID}`;

//     // Negative number
//     let sign = amount[0] === '-' ? '' : '+';
//     if(sign === '') clickVisualElement.classList.add('clickvisual_negative');

//     let text = '';
//     // Carrot
//     if(style === 'carrot') text = `${sign}${amount}`; // Normal click
//     else if(style === 'falling')  text = `${sign}${amount}`; // Falling carrot
//     else if(style === 'cash') text = `⚬${amount}`; // Cash
//     else text = amount;
//     clickVisualElement.classList.add(`clickvisual_${style}`);
//     clickVisualElement.innerText = text;
//     bonusVisualArea.append(clickVisualElement);

//     // Delete Popup after animation finishes/2 seconds
//     var bonusCurrent = dom("bonus" + bonusID);
//     setTimeout(() => { bonusCurrent.remove(); }, 2000);

//     // Incremement element ids
//     if(bonusID < 100)  bonusID += 1;
//     else bonusID = 0;

//     function randomOffset() { return Math.floor((Math.random() * 10) - 5); }
// }
    return(
    <section id="game_section">
        {/* <!-- Falling Carrots --> */}
        <div id="fallingCarrotsArea"></div>

        {/* Main Carrot */}
        <img src="/assets/Carrot Clicker.png"
            onClick={()=>{
                earnCarrots(Player.cpc,"cpc");
                clickSpeedHandler(true);
                popupHandler(1);
            }}
            id="main_carrot" alt="Carrot" role="button" tabIndex="0"
        />

        {/* Info Box Under Carrot */}
        <div className="mini_stats">
                <p className="Carrot_Count"> {DisplayRounded(Player.carrots)} Carrots</p>
                <p><span id="click_speed">{clickSpeed}/{bestClickSpeed} clicks per second</span></p>
                <br/>

                {/* Mini info */}
                <div className="row flex">
                    {/* <!-- CPC --> */}
                    <GameInfoBox name={"CPC"} icon="/assets/stats/cursor_white.png" value={DisplayRounded(Player.cpc)} tooltip={"Carrots Per Click"}/>

                    {/* <!-- CPS --> */}
                    <GameInfoBox name={"CPS"} icon="/assets/stats/clock.png" value={DisplayRounded(Player.cps)} tooltip={"Carrots Per Second"}/>
                </div>
                <br/>

                <div className="row flex">
                    {/* Golden Carrots */}
                    <GameInfoBox name={"Golden Carrots"} value={"N/A"} tooltip={"Golden carrots are created when you prestige. Use them to buy tomes to give your farmers permanent buffs. Be sure to spend all of your golden carrots before you start farming!"}/>

                    {/* Golden Carrots */}
                    <GameInfoBox name={"Tome Pages"} value={"N/A"} tooltip={"For every tome page you have you will recieve a +1% (or more) golden carrot bonus when prestiging. Earn additional tome pages by completing achievements!"}/>
                </div>

                <div className="row flex">
                    <GameInfoBox name={"Coins"} value={"N/A"}
                        tooltip={"While clicking the carrot there is a chance that coins will drop instead of carrots. Make sure to grab them!"}
                        prefix={<span class="color_cash">⚬</span>} />
                </div>
            </div>

            {/* Game Buttons */}
            <div class="main_buttons flex">
                <GameButton name={"???" ?? "Prestige"} icon="/assets/icons/pixel_carrot_white.png" onClick={"openPrestigeMenu()"} buttonDisabled={true} />
                {/* <GameButton name="Inventory" icon={backpackSVG} onClick={"openInventory()"} /> */}
                <GameButton name="Tips" icon="/assets/icons/lightbulb.svg" onClick={() => {
                    // dialog("Test", "This is a test", "Done testing", "button_gold", () => {
                    //     setMenu(false); earnCarrots(100);
                    // });

                    setMenu("tips");
                }} />
                <GameButton name="Hardmode" icon="/assets/icons/medal.png" onClick="openDifficultyMenu()" classes="button_red" />
                {/* <GameButton name="Share your progress" icon={shareSVG} onClick="shareProgress()" /> */}
            </div>

            {/* <!-- Prestige potential --> */}
            <p id="prestige-section" className="secondary_text center" style={{"paddingTop":"6px"}}>
                Prestige potential: <span id="main_prestige_potential">-</span>
            </p>
    </section>
    )
}