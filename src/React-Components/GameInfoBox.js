export default function GameInfoBox({name, value, icon, tooltip, prefix}){
    return(
        <div className="mini_item" data-tooltip={tooltip}>
            {
                icon ? <img src={icon} alt="" className="invert_alt"/> : null
            }
            <span className="mini_name">{name}</span>
            <span className="mini_number">{prefix} {value}</span>
        </div>
    )
}