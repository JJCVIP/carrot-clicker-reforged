export default function GameButton({name, icon, onClick, classes="", buttonDisabled}){
    return (
        <button
            onClick={onClick}
            data-tooltip={name}
            className={"main_button_item " + classes}
            disabled={buttonDisabled}
        >
            <img src={icon} alt={name} className="main_button_img"/>
        </button>
    )
}