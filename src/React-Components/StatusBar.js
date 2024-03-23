import React from "react"
import { useState, useEffect, useRef, useCallback } from "react";

// Assets
import { pixel_carrot_32x } from "../assets/assets"

// Components
import NavMenu from "./NavMenu";

// Tip data
import { tips } from "../defaultObjects.mjs";
tips.fun_starter[tips.fun_starter.findIndex(e => e === '%onlyon%')] = `Only on ${window.location.host}`; // Only on [website name] tip


export default function StatusBar({player, settings}){
    const [tipDisplayed,changeTipDisplayed] = useState("Click The Carrot"); 
    const tipInterval = useRef(null);
    
    /** Randomly choose a new tip to display in the status bar */
    const tipchange=useCallback(()=>{
        //if(menuOpen()) return;
        
        const tipTiers = ['starter', 'beginner', 'intermediate', 'advanced'];

        clearInterval(tipInterval.current);
        tipInterval.current = setInterval(() => {tipchange()}, 15000);
        // Tracker - determine tips level
        if(player.equippedHoes > 0 || (player.prestige.carrots > 100000 && player.tip_tracker.tracker === 0)) player.tip_tracker.tracker = 1; // 1 tool equipped or 100k
        else if(player.prestige.carrots > 1000000 && player.tip_tracker.tracker === 1) player.tip_tracker.tracker = 2; // 1 million
        else if(player.prestige.carrots > 1000000000 && player.tip_tracker.tracker === 2) player.tip_tracker.tracker = 3; // 1 billion

        if(player.tip_tracker.tracker > player.tip_tracker.best) player.tip_tracker.best = player.tip_tracker.tracker; // Update best
        if(Math.random() < 0.15) player.tip_tracker.tracker = Math.floor(Math.random() * player.tip_tracker.tracker); // 20% chance any tip tier can appear 
        player.tip_tracker.type = Math.random() < settings.fun_tip_percentage / 100 ? "fun" : "real"; // Decides if the tip will be real or fun. 

        // Determine and display the tip
        let type = player.tip_tracker.type === "fun" ? 'fun_' : '';
        type += tipTiers[player.tip_tracker.tracker];
        player.tip_tracker.number = Math.floor(Math.random() * tips[type].length); // Roll tip

        // Page
        changeTipDisplayed(tips[type][player.tip_tracker.number]);

        //tipsHTMLupdate = true;
    },[player.equippedHoes, player.prestige.carrots, settings.fun_tip_percentage, player.tip_tracker])


    // Automatically change tips
    useEffect(()=>{
        tipInterval.current = setInterval(tipchange, 15000);
        return () => clearInterval(tipInterval.current);
    },[tipchange])


    //#endregion


    return(
       <div className="status_bar">
            {/*<!-- Display when Javascript is turned off*/}
            <div className="basic_info flex">
                <h1 className="main-icon-header">
                        <img src={pixel_carrot_32x} alt="" id="main_icon" title="Carrot Clicker"/>
                        Carrot Clicker
                </h1>

                {/* <!-- Tips --> */}
                <div id="Tip" className="link_styling" onClick={tipchange} tabIndex="0" role="button">{tipDisplayed}</div>

                <div id="info_dropdown" tabIndex="0">
                    ▼
                    <NavMenu/>
                </div>
            </div>
       </div>
    )
}