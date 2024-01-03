import React from "react"
import { useState, useEffect, useRef, useCallback } from "react";

import pixel_carrot_32x from "../assets/pixel_carrot_32x.png";

import NavMenu from "./NavMenu";
import { default_tips } from "../defaultObjects.mjs";

export default function StatusBar({player, settings}){
    const [tipDisplayed,changeTipDisplayed] = useState("Click The Carrot"); 
    const tipInterval = useRef(null);

    var tips = default_tips;
    try { tips.seen = localStorage.getObject('tips_seen') || tips.seen; }
    catch (error) { console.error(error); }
    
    /** Randomly choose a new tip to display in the status bar */
    const tipchange=useCallback(()=>{
        //if(menuOpen()) return;
        
        const tipTiers = ['starter', 'beginner', 'intermediate', 'advanced'];

        clearInterval(tipInterval.current);
        tipInterval.current = setInterval(() => {tipchange()}, 15000);
        // Tracker - determine tips level
        if(player.equippedHoes > 0 || (player.prestige.carrots > 100000 && tips.tracker === 0)) tips.tracker = 1; // 1 tool equipped or 100k
        else if(player.prestige.carrots > 1000000 && tips.tracker === 1) tips.tracker = 2; // 1 million
        else if(player.prestige.carrots > 1000000000 && tips.tracker === 2) tips.tracker = 3; // 1 billion

        if(tips.tracker > tips.best) tips.best = tips.tracker; // Update best
        if(Math.random() < 0.15) tips.tracker = Math.floor(Math.random() * tips.tracker); // 20% chance any tip tier can appear 
        tips.type = Math.random() < settings.fun_tip_percentage / 100 ? "fun" : "real"; // Decides if the tip will be real or fun. 

        // Determine and display the tip
        let type = tips.type === "fun" ? 'fun_' : '';
        type += tipTiers[tips.tracker];
        tips.number = Math.floor(Math.random() * tips[type].length); // Roll tip

        // Page
        changeTipDisplayed(tips[type][tips.number]);

        // Mark tip as seen
        if(tips.seen[type][tips.number] !== true) {
            tips.seen[type][tips.number] = true;
            if(player.flags['cookies_accepted']) localStorage.setObject('tips_seen', tips.seen);
        }
        //tipsHTMLupdate = true;
    },[player.equippedHoes, player.flags, player.prestige.carrots, settings.fun_tip_percentage, tips])


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