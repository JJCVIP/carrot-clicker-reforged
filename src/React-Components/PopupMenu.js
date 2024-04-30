export default function PopupMenu({ menu, setMenu, params={} }) {

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
