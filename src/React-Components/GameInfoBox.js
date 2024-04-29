export default function GameInfoBox({name, value, icon, tooltip}){
    return(
        <div className="mini_item" data-tooltip={tooltip}>
            {
                icon ? <img src={icon} alt="" className="invert_alt"/> : null
            }
            <span className="mini_name">{name}</span>
            <span className="mini_number">{value}</span>
        </div>
    )
}