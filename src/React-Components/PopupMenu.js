import { themes } from "../gamedata"

/** Popup menus */
export default function PopupMenu({
    menu, setMenu, params={},
    Settings, setTheme
}) {

    // MENUS
    const menus = {
        dialog:
        <div id="dialog" class="popup_box">
            {/* <!-- Dialog info --> */}
            <h2 id="dialog_title">{params.title}</h2>
            <p id="dialog_desc">
                {params.description}
            </p>
            {/* <!-- Dialog Options --> */}
            <div id="dialog_buttons">
                <button onClick={close} id="dialog_button_cancel">
                    Cancel
                </button>
                <button onClick={params.button_action} id="dialog_button_accept" className={params.buttonStyle}>
                    {params.buttonName}
                </button>
            </div>
        </div>,

        // Themes
        themes:
        <div id="theme_menu" class="popup_box fancy_switcher">
            {/* <!-- Tabs --> */}
            <div class="switcher_bar flex">
                <button class="tab activetab">Themes</button>
                <button class="tab cosmetic_related new_indicator_cosmetic" onClick={() => { setMenu("cosmetics") }} id="cosmetic_tab_button">
                    <img src="./assets/icons/padlock.svg" alt="" class="button_icon invert cosmetic_padlock"/>
                    Cosmetics
                </button>
                <h2 class="toast_close dialog_close main_bg_color" title="Close" onClick={close} role="button" tabindex="0">x</h2>
            </div>

            {/* <!-- Title --> */}
            <div>
                <h1 class="theme_menu_title">Themes</h1>
                <p class="theme_menu_title secondary_text">A new coat of paint</p>
            </div>
        

            {/* <!-- List --> */}
            <div id="themes_list" class="fancy_list">
                {Object.entries(themes).map(([key, theme], index) => {
                    return (
                        <div key={index} class="theme_item flex" onClick={() => { setTheme(key); }} tabindex="0" role="button">
                            <img
                                src={`/assets/theme/${key}.png`} alt=""
                                class="theme_preview" id="theme" loading="lazy"
                            />
                            <div>
                                <h3>{theme.name}</h3>
                                <p class="secondary_text">{theme.desc}</p>
                            </div>
                            <div class="theme_checkbox">
                                {Settings.theme === key ?
                                    <img src="/assets/checkmark.svg" alt="Selected" class="theme_checkmark"/> :
                                    null
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    }

    /** Close popup menu */
    function close() {
        setMenu(false);
    }

    // JSX
    return (
        <div id="overlay">
            {/* Backdrop */}
            <div id="backdrop" onClick={close}></div>

            {/* Menu */}
            {menus[menu]}
        </div>
    )
}
