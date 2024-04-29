export default function GameInfoBox({name, info, png, tooltip}){
    return(
        <div className="mini_item" data-tooltip={tooltip}>
            <img src={png} alt="" className="invert_alt"/><span className="mini_name">{name}</span><span className="mini_number">{info}</span>
        </div>
    )
}