//assets
import palleteSVG from "../assets/icons/palette.svg";
import infoSVG from "../assets/icons/info.svg"
import tool0PNG from "../assets/tools/tool_0.png"
import tool1PNG from "../assets/tools/tool_1.png"
import tool2PNG from "../assets/tools/tool_2.png"
import tool3PNG from "../assets/tools/tool_3.png"
import tool4PNG from "../assets/tools/tool_4.png"
import tool5PNG from "../assets/tools/tool_5.png"
export default function CharacterBox({character}){
    return(
    <>
    <div className="Bill characterbox box" id="bill_box">
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

            <img src="./assets/icons/lvl_up_arrow.png" id="bill_level_up" className="levelupimg" alt="Upgrade Boomer Bill" onclick="levelUp(Boomer_Bill,multibuy[mbsel])" title="Level up" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_0_number">{character.Hoes[0]}</p>
            <img src={tool0PNG} onclick="equipTool(Boomer_Bill,0,multibuy[mbsel])" className="toolicon blackedout tool_0" id="bill_tool_0" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_1_number">{character.Hoes[1]}</p>
            <img src={tool1PNG} onclick="equipTool(Boomer_Bill,1,multibuy[mbsel])" className="toolicon blackedout tool_1" id="bill_tool_1" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_2_number">{character.Hoes[2]}</p>
            <img src={tool2PNG} onclick="equipTool(Boomer_Bill,2,multibuy[mbsel])" className="toolicon blackedout tool_2" id="bill_tool_2" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_3_number">{character.Hoes[3]}</p>
            <img src={tool3PNG} onclick="equipTool(Boomer_Bill,3,multibuy[mbsel])" className="toolicon blackedout tool_3" id="bill_tool_3" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_4_number">{character.Hoes[4]}</p>
            <img src={tool4PNG} onclick="equipTool(Boomer_Bill,4,multibuy[mbsel])" className="toolicon blackedout tool_4" id="bill_tool_4" tabindex="0" role="button" />

            <p className="toolnumber" id="bill_tool_5_number">{character.Hoes[5]}</p>
            <img src={tool5PNG} onclick="equipTool(Boomer_Bill,5,multibuy[mbsel])" className="toolicon blackedout tool_5" id="bill_tool_5" tabindex="0" role="button" />
        </div>
    </div></>
    )
}