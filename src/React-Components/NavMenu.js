import React from "react"

export default function NavMenu(){
    function handleSettingsClick(){
        //panelChange(`settings-panel`)
        alert("Not yet implemeneted");
    }
    return(
        <nav className="hover_menu">
            {/* <!-- Settings --> */}
            <a href="#settings" onClick={handleSettingsClick} tabIndex="0">
                <div className="menu_item link_styling secondary_text">
                    <img src="./assets/icons/settings.svg" alt="" className="dropdown_img invert"/>
                    Settings
                </div>
            </a>
        </nav>
    )
}
