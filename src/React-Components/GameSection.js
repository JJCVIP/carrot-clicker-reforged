import React from "react"
//react
import { useEffect, useState, useCallback, useRef } from "react";

//react components
import GameInfoBox from "./GameInfoBox";

//functions
import { DisplayRounded } from "../carrot_utilities.mjs";

//assets
import carrotPNG from '../assets/Carrot Clicker.png'
import whiteCursorPNG from '../assets/stats/cursor_white.png'
import clockPNG from '../assets/stats/clock.png'
import goldenCarrotPNG from "../assets/golden carrot.png"
import tomePagePNG from "../assets/items/tome_page.png"
import cashPNG from "../assets/cash.png"
import questonMarkSVG from "../assets/icons/question_mark.svg"
import backpackSVG from "../assets/icons/backpack.svg"
import lightBulbSVG from "../assets/icons/lightbulb.svg"
import medalPNG from "../assets/icons/medal.png"

export default function GameSection({Player, earnCarrots,settings={},cosmeticData={}}){
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
        <div id="fallingCarrotsArea"> </div>

        {/* Main Carrot */}
        <img src={carrotPNG} onClick={()=>{earnCarrots(Player.cpc,"cpc"); clickSpeedHandler(true); popupHandler(1)}} id="main_carrot" alt="Carrot" role="button" tabIndex="0"></img>

        {/* Info Box Under Carrot */}
        <div className="mini_stats">
                <p className="Carrot_Count"> {DisplayRounded(Player.carrots)} Carrots</p>
                <p><span id="click_speed">{clickSpeed}/{bestClickSpeed} clicks per second</span></p><br/>

                <div className="row flex">
                    {/* <!-- CPC --> */}
                    <GameInfoBox png={whiteCursorPNG} name={"CPC"} info={DisplayRounded(Player.cpc)} tooltip={"Carrots Per Click"}/>
                    {/* <!-- CPS --> */}
                    <GameInfoBox png={clockPNG} name={"CPS"} info={DisplayRounded(Player.cps)} tooltip={"Carrots Per Second"}/>
                </div><br/>
                <button>
                    <img src={backpackSVG} alt="Inventory" className="main_button_img" id="inventory_button_img"/>
                </button> 
                {/* <!-- Tips button --> */}
                <button onClick="openTipsMenu()" data-tooltip="Tips" className="main_button_item" id="tips_menu_button">
                    <img src={lightBulbSVG} alt="Tips" className="main_button_img" id="tips_button_img"/>
                </button>
                {/* <!-- Hardmode button --> */}
                <button onClick="openDifficultyMenu()" data-tooltip="Hardmode" className="main_button_item button_red" id="difficulty_menu_button">
                    <img src={medalPNG} alt="Hardmode" className="main_button_img" id="tips_button_img"/>
                </button>
            </div>

            {/* <!-- Prestige potential --> */}
            <p id="prestige-section" className="secondary_text center" style={{"paddingTop":"6px"}}>
                Prestige potential:
                    <span id="main_prestige_potential">-</span>
            </p>
    </section>
    )
}