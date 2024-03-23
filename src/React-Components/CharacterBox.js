//react hooks
import { useState } from "react";

//assets
import palleteSVG from "../assets/icons/palette.svg";
import infoSVG from "../assets/icons/info.svg"
import levelUpPNG from "../assets/icons/lvl_up_arrow.png"
import tool0PNG from "../assets/tools/tool_0.png"
import tool1PNG from "../assets/tools/tool_1.png"
import tool2PNG from "../assets/tools/tool_2.png"
import tool3PNG from "../assets/tools/tool_3.png"
import tool4PNG from "../assets/tools/tool_4.png"
import tool5PNG from "../assets/tools/tool_5.png"
/**
 * Component to display character interaction boxes
 * @param {{character: CharacterObject; equipTool: Function; Greg:GregObject}} 
 * @returns React JSX
 * @version {1.0}
 * @author JJCVIP
 */
export default function CharacterBox({character,  Greg, levelUp, equipTool}){
    //Dynamic Classes
    const characterLockedClass = character.locked ? "char_locked" : "";
    const tool0Classes = (character.Hoes[0]>0 ? " " : "blackedout ") + (Greg.Hoes[0]>0 ? "glowing" : "");
    const tool1Classes = (character.Hoes[1]>0 ? " " : "blackedout ") + (Greg.Hoes[1]>0 ? "glowing" : "");
    const tool2Classes = (character.Hoes[2]>0 ? " " : "blackedout ") + (Greg.Hoes[2]>0 ? "glowing" : "");
    const tool3Classes = (character.Hoes[3]>0 ? " " : "blackedout ") + (Greg.Hoes[3]>0 ? "glowing" : "");
    const tool4Classes = (character.Hoes[4]>0 ? " " : "blackedout ") + (Greg.Hoes[4]>0 ? "glowing" : "");
    const tool5Classes = (character.Hoes[5]>0 ? " " : "blackedout ") + (Greg.Hoes[5]>0 ? "glowing" : "");

    console.log(character);
    return(
    <>
    <div className={`Bill characterbox box ${characterLockedClass}`} id="bill_box">
        <div className="char_info" id="bill_info">
            <h2>{character.nickname}</h2>
            <p className="secondary_text">- Farmer -</p>
            <hr/>
            <p>Upgrading Bill will increase your carrots per click (CPC) by one.</p>

        </div>
        <img src={palleteSVG} alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('bill')" tabindex="0" role="button" />
        <img src={infoSVG} alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('bill')" tabindex="0" role="button" />

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

            <img src={levelUpPNG} id="bill_level_up" className="levelupimg" alt="Upgrade Boomer Bill" onClick={()=>{levelUp(character,1)}} title="Level up" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_0_number">{character.Hoes[0]}</p>
            <img src={tool0PNG} onClick={()=>{equipTool(character,0,1)}} className={`toolicon tool_0  ${tool0Classes}`} id="bill_tool_0" tabindex="0" role="button" alt="Tool 0" />

            <p className="toolnumber" id="bill_tool_1_number">{character.Hoes[1]}</p>
            <img src={tool1PNG} onClick={()=>{equipTool(character,1,1)}} className={`toolicon tool_1 ${tool1Classes}`} id="bill_tool_1" tabindex="0" role="button" alt="Tool 1"/>

            <p className="toolnumber" id="bill_tool_2_number">{character.Hoes[2]}</p>
            <img src={tool2PNG} onClick={()=>{equipTool(character,2,1)}} className={`toolicon tool_2 ${tool2Classes}`} id="bill_tool_2" tabindex="0" role="button" alt="Tool 2"/>

            <p className="toolnumber" id="bill_tool_3_number">{character.Hoes[3]}</p>
            <img src={tool3PNG} onClick={()=>{equipTool(character,3,1)}} className={`toolicon tool_3 ${tool3Classes}`} id="bill_tool_3" tabindex="0" role="button" alt="Tool 3"/>

            <p className="toolnumber" id="bill_tool_4_number">{character.Hoes[4]}</p>
            <img src={tool4PNG} onClick={()=>{equipTool(character,4,1)}} className={`toolicon tool_4 ${tool4Classes}`} id="bill_tool_4" tabindex="0" role="button" alt="Tool 4"/>

            <p className="toolnumber" id="bill_tool_5_number">{character.Hoes[5]}</p>
            <img src={tool5PNG} onClick={()=>{equipTool(character,5,1)}} className={`toolicon tool_5 ${tool5Classes}`} id="bill_tool_5" tabindex="0" role="button" alt="Tool 5"/>
        </div>
    </div></>
    )
}