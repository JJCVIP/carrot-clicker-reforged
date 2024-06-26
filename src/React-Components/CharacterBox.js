// React hooks
import { useState } from "react";

// Assets
const toolPNGs = [
    "/assets/tools/tool_0.png",
    "/assets/tools/tool_1.png",
    "/assets/tools/tool_2.png",
    "/assets/tools/tool_3.png",
    "/assets/tools/tool_4.png",
    "/assets/tools/tool_5.png"
]

/** Component to display character interaction boxes
 * @param {{character: CharacterObject; equipTool: Function; Greg:GregObject}} 
 * @returns React JSX
 * @version {1.0}
 * @author JJCVIP
 */
export default function CharacterBox({character,  Greg, levelUp, equipTool}){
    //Dynamic Classes
    const characterLockedClass = character.locked ? "char_locked" : "";

    return(
    <div className={`Bill characterbox box ${characterLockedClass}`} id="bill_box">
        <div className="char_info" id="bill_info">
            <h2>{character.nickname}</h2>
            <p className="secondary_text">- Farmer -</p>
            <hr/>
            <p>Upgrading Bill will increase your carrots per click (CPC) by one.</p>

        </div>
        <img src="/assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onClick="cosmeticSwitcher('bill')" tabIndex="0" role="button" />
        <img src="/assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onClick="characterInfo('bill')" tabIndex="0" role="button" />

        {/* <!-- Top --> */}
        <div className="top flex">
            <img
                src={character.img}
                alt={character.name}
                id={`${character.nickname}_avatar`}
                className="characterimg"
                title={character.name}
                onClick="characterInfo('bill')" />

            <div className="characterdesc">
                <b id="bill_name" className="character_name">{character.nickname}</b>
                <p>Upgrade cost: <span id="UpBillCost" className="upgrade_cost white">{character.lvlupPrice}</span></p>
                <p>Level: {character.lvl}</p>
            </div>
        </div>

        {/* <!-- Bottom --> */}
        <div className="bottom">

            <img src="/assets/icons/lvl_up_arrow.png" id="bill_level_up" className="levelupimg" alt="Upgrade Boomer Bill" onClick={()=>{levelUp(character,1)}} title="Level up" tabIndex="0" role="button" />

            {/* Tools */}
            {character.Hoes.map((amount, index) =>
                <>
                    <p className="toolnumber" id={`bill_tool_${index}_number`}>{amount || ''}</p>
                    <img
                        src={toolPNGs[index]}
                        onClick={()=>{equipTool(character,index,1)}}
                        className={`
                            toolicon tool_${index}
                            ${(amount>0 ? " " : "blackedout ") + (Greg.Hoes[index]>0 ? "glowing" : "")}
                        `}
                        id={`bill_tool_${index}`} tabIndex="0" role="button" alt="PLACEHOLDER"
                    />
                </>
            )}
        </div>
    </div>
    )
}