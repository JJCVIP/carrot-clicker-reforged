import React from "react"

import {
    settingsSVG, padlockSVG, paletteSVG, cosmeticSVG, volumeSVG, refreshSVG, externalSVG, githubPNG
} from "../assets/assets"

export default function NavMenu(){

    // Functions
    function handleSettingsClick(){
        //panelChange(`settings-panel`)
        alert("Not yet implemeneted");
    }
    function themeSwitcher() {
        alert("Not yet implemeneted");
    }
    function cosmeticSwitcher() {
        alert("Not yet implemeneted");
    }
    function startCredits() {
        alert("Not yet implemeneted");
    }


    return(
        <nav className="hover_menu">
            {/* <!-- Settings --> */}
            <a href="#settings" onClick={handleSettingsClick} tabIndex="0">
                <div className="menu_item link_styling secondary_text">
                    <img src={settingsSVG} alt="" className="dropdown_img invert"/>
                    Settings
                </div>
            </a>


            <div className="flex">
                <a onClick={themeSwitcher} tabIndex="0">
                    <div className="menu_item link_styling secondary_text">
                        <img src={paletteSVG} alt="" className="dropdown_img invert"/>
                        Themes
                    </div>
                </a>
                <hr className="vr"/>
                <a onClick={cosmeticSwitcher} tabIndex="0">
                    <div className="menu_item link_styling secondary_text cosmetic_related">
                        <img src={padlockSVG} alt="" className="dropdown_img invert cosmetic_padlock"/>
                        <img src={cosmeticSVG} alt="" className="dropdown_img invert"/>
                        Cosmetics
                    </div>
                </a>

            </div>

            <div className="menu_item link_styling secondary_text">
                <label for="volume_master_dropdown">
                    <img src={volumeSVG} alt="" className="dropdown_img invert" id="volume_master_dropdown_img"/>
                    <input type="range" min="0" max="100" value="100" className="slider" id="volume_master_dropdown"/>
                </label>
            </div>

            <a tabIndex="0" onClick={startCredits}>
                <div className="menu_item link_styling secondary_text">
                    Credits
                </div>
            </a>

            <a href="https://notkal.com/posts/carrot-clicker-changelog/" target="_blank" rel="noopener noreferrer" tabIndex="0">
                <div className="menu_item link_styling secondary_text">
                    <img src={refreshSVG} alt="" className="dropdown_img"/>
                    Changelog
                    <img src={externalSVG} alt="(External)" className="dropdown_img right_img"/>
                </div>
            </a>

            <a href="https://github.com/not-the/Carrot-Clicker" target="_blank" rel="noopener noreferrer" tabIndex="0">
                <div className="menu_item link_styling secondary_text">
                    <img src={githubPNG} alt="" className="dropdown_img"/>
                    Github
                    <img src={externalSVG} alt="(External)" className="dropdown_img right_img"/>
                </div>
            </a>

            <a href="https://notkal.com/about/#privacy" target="_blank" rel="noopener noreferrer" tabIndex="0">
                <div className="menu_item link_styling secondary_text">
                    Privacy Policy
                    <img src={externalSVG} alt="(External)" className="dropdown_img right_img"/>
                </div>
            </a>
        </nav>
    )
}
