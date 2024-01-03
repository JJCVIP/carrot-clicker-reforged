import InfoButton from "./InfoButton"

export default function CharacterSection() {
    return (
        <section id="character_section">

            {/* <!-- Column 1 --> */}
            <div className="character_column">

                {/* <!-- Powers --> */}
                <div id="powers_container" className="box flex">
                    <div className="mb_vr">
                        <div id="multibuy" className="power_item link_styling bold secondary_text" title="Purchase multiplier - Click to cycle" onclick="multibuySpin()" tabindex="0" role="button">
                            1x
                        </div>
                    </div>

                    {/* <!-- Active boosts --> */}
                    <div id="boosts" className="flex">
                        {/* <!-- <div className="power_item" id="boost_0"> */}
                        {/* <img src="./assets/pixel_carrot_32x.png" alt=""/><span id="time_boost_0">-:--</span> */}
                        {/* </div> --> */}
                    </div>

                    {/* <!-- None active --> */}
                    <div id="no_powers boost-modifiers" className="power_item">
                        No active boosts
                    </div>

                    {/* <!-- Info button --> */}
                    {/* <span tabindex="0" className="question_mark" title="Boosts will not be remembered if the game is closed" onclick="toast(...toasts.info_boosts)" style="padding-right: 10px; margin-left: auto;">?</span> */}
                    <InfoButton title="Boosts will not be remembered if the game is closed" toast="info_boosts"/>
                </div>

                {/* <!--Boomer Bill Rendering--> */}
                <div className="Bill characterbox box" id="bill_box">
                    <div className="char_info" id="bill_info">
                        <h2>Bill</h2>
                        <p className="secondary_text">- Farmer -</p>
                        <hr/>
                        <p>Upgrading Bill will increase your carrots per click (CPC) by one.</p>

                    </div>
                    <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('bill')" tabindex="0" role="button" />
                    <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('bill')" tabindex="0" role="button" />

                    {/* <!-- Top --> */}
                    <div className="top flex">
                        <img
                            src="./assets/characters/Bill.png"
                            alt="Boomer Bill"
                            id="bill_avatar"
                            className="characterimg"
                            title="Boomer Bill"
                            onclick="characterInfo('bill')" />

                        <div className="characterdesc">
                            <b id="bill_name" className="character_name">Bill</b>
                            <p>Upgrade cost: <span id="UpBillCost" className="upgrade_cost white">-</span></p>
                            <p>Level: <input type="text" value="-" id="Bill_lvl" className="discreet dev_input" autocomplete="off" disabled /></p>
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom">

                        <img src="./assets/icons/lvl_up_arrow.png" id="bill_level_up" className="levelupimg" alt="Upgrade Boomer Bill" onclick="levelUp(Boomer_Bill,multibuy[mbsel])" title="Level up" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_0_number">err</p>
                        <img src="./assets/tools/tool_0.png" onclick="equipTool(Boomer_Bill,0,multibuy[mbsel])" className="toolicon blackedout tool_0" id="bill_tool_0" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_1_number">err</p>
                        <img src="./assets/tools/tool_1.png" onclick="equipTool(Boomer_Bill,1,multibuy[mbsel])" className="toolicon blackedout tool_1" id="bill_tool_1" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_2_number">err</p>
                        <img src="./assets/tools/tool_2.png" onclick="equipTool(Boomer_Bill,2,multibuy[mbsel])" className="toolicon blackedout tool_2" id="bill_tool_2" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_3_number">err</p>
                        <img src="./assets/tools/tool_3.png" onclick="equipTool(Boomer_Bill,3,multibuy[mbsel])" className="toolicon blackedout tool_3" id="bill_tool_3" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_4_number">err</p>
                        <img src="./assets/tools/tool_4.png" onclick="equipTool(Boomer_Bill,4,multibuy[mbsel])" className="toolicon blackedout tool_4" id="bill_tool_4" tabindex="0" role="button" />

                        <p className="toolnumber" id="bill_tool_5_number">err</p>
                        <img src="./assets/tools/tool_5.png" onclick="equipTool(Boomer_Bill,5,multibuy[mbsel])" className="toolicon blackedout tool_5" id="bill_tool_5" tabindex="0" role="button" />
                    </div>
                </div>
                {/* <!-- #endregion --> */}

                {/* <!--Belle Boomerette Rendering--> */}
                <div className="Belle characterbox box char_locked" id="belle_box">
                    <div className="char_info" id="belle_info">
                        <h2>Belle</h2>
                        <p className="secondary_text">- Farmer -</p>
                        <hr />
                        Upgrading Belle will increase your carrots per second (CPS) by one.
                    </div>
                    <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('belle')" tabindex="0" role="button" />
                    <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('belle')" tabindex="0" role="button" />

                    {/* <!-- Top --> */}
                    <div className="top flex">
                        <img
                            src="./assets/characters/Belle.png"
                            alt="Belle Boomerette"
                            id="belle_avatar"
                            className="characterimg"
                            title="Boomer Belle"
                            onclick="characterInfo('belle')" />

                        <div className="characterdesc">
                            <b id="belle_name" className="character_name">Belle</b>
                            <p>Upgrade cost: <span id="UpBelleCost" className="upgrade_cost white">-</span></p>
                            <p>Level: <input type="text" value="-" id="Belle_lvl" className="discreet dev_input" autocomplete="off" disabled /></p>
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom">

                        <img src="./assets/icons/lvl_up_arrow.png" id="belle_level_up" alt="Upgrade Belle Boomerette" onclick="levelUp(Belle_Boomerette,multibuy[mbsel])" className="levelupimg" title="Level up" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_0_number">err</p>
                        <img src="./assets/tools/tool_0.png" onclick="equipTool(Belle_Boomerette,0,multibuy[mbsel])" className="toolicon blackedout tool_0" id="belle_tool_0" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_1_number">err</p>
                        <img src="./assets/tools/tool_1.png" onclick="equipTool(Belle_Boomerette,1,multibuy[mbsel])" className="toolicon blackedout tool_1" id="belle_tool_1" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_2_number">err</p>
                        <img src="./assets/tools/tool_2.png" onclick="equipTool(Belle_Boomerette,2,multibuy[mbsel])" className="toolicon blackedout tool_2" id="belle_tool_2" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_3_number">err</p>
                        <img src="./assets/tools/tool_3.png" onclick="equipTool(Belle_Boomerette,3,multibuy[mbsel])" className="toolicon blackedout tool_3" id="belle_tool_3" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_4_number">err</p>
                        <img src="./assets/tools/tool_4.png" onclick="equipTool(Belle_Boomerette,4,multibuy[mbsel])" className="toolicon blackedout tool_4" id="belle_tool_4" tabindex="0" role="button" />

                        <p className="toolnumber" id="belle_tool_5_number">err</p>
                        <img src="./assets/tools/tool_5.png" onclick="equipTool(Belle_Boomerette,5,multibuy[mbsel])" className="toolicon blackedout tool_5" id="belle_tool_5" tabindex="0" role="button" />
                    </div>

                </div>

                {/* <!--Gregory Rendering--> */}
                <div className="Greg characterbox box char_locked" id="greg_box">
                    <div className="char_info" id="greg_info">
                        <h2>Greg</h2>
                        <p className="secondary_text">- Blacksmith -</p><hr />
                        Upgrade Greg to create and store tools. The maximum amount of tools he and the other characters can hold is equal to his level.
                    </div>
                    <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('greg')" tabindex="0" role="button" />
                    <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('greg')" tabindex="0" role="button" />

                    {/* <!-- Top --> */}
                    <div className="top flex">
                        <img
                            src="./assets/characters/Greg.png"
                            alt="Gregory"
                            id="greg_avatar"
                            className="characterimg"
                            title="Gregory"
                            onclick="characterInfo('greg')" />
                        <div className="characterdesc">
                            <b id="greg_name" className="character_name">Greg</b>
                            <p>Upgrade cost: <span id="UpGregCost" className="upgrade_cost white">-</span></p>
                            <p>Level: <input type="text" value="-" id="Greg_lvl" className="discreet dev_input" autocomplete="off" disabled /><span id="greg_next">Next tool at -</span></p>
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom secondary_text">
                        <img src="./assets/icons/lvl_up_arrow.png" id="greg_level_up" alt="Upgrade Greg" onclick="levelUp(Gregory,multibuy[mbsel])" className="levelupimg" title="Level up" tabindex="0" role="button" />

                        {/* <!-- Crafting display --> */}
                        <div className="darker_bg_color inactive" title="Idle" id="greg_crafting_info">
                            <img src="./assets/tools/tool_0.png" alt="" id="greg_progress_image" className="main_progress_image" />
                            <img src="./assets/icons/refresh.svg" alt="" className="greg_spinny" />
                        </div>

                        {/* <!-- Tools --> */}
                        <span className="tool blackedout" data-tooltip="Hoe" id="greg_tool_0">
                            <span className="tool_price" data-tool-id="0">tool_0</span>
                            <p className="toolnumber" id="greg_tool_0_number">err</p>
                            <img src="./assets/tools/tool_0.png" className="toolicon greg_margin_fix tool_0" onclick="createTool(0,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>
                        <span className="tool blackedout" data-tooltip="Sturdy Hoe" id="greg_tool_1">
                            <span className="tool_price" data-tool-id="1">tool_1</span>
                            <p className="toolnumber" id="greg_tool_1_number">err</p>
                            <img src="./assets/tools/tool_1.png" className="toolicon tool_1" onclick="createTool(1,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>
                        <span className="tool blackedout" data-tooltip="Scythe" id="greg_tool_2">
                            <span className="tool_price" data-tool-id="2">tool_2</span>
                            <p className="toolnumber" id="greg_tool_2_number">err</p>
                            <img src="./assets/tools/tool_2.png" className="toolicon tool_2" onclick="createTool(2,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>
                        <span className="tool blackedout" data-tooltip="Plough" id="greg_tool_3">
                            <span className="tool_price" data-tool-id="3">tool_3</span>
                            <p className="toolnumber" id="greg_tool_3_number">err</p>
                            <img src="./assets/tools/tool_3.png" className="toolicon tool_3" onclick="createTool(3,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>
                        <span className="tool blackedout" data-tooltip="Dual Sickle" id="greg_tool_4">
                            <span className="tool_price" data-tool-id="4">tool_4</span>
                            <p className="toolnumber" id="greg_tool_4_number">err</p>
                            <img src="./assets/tools/tool_4.png" className="toolicon tool_4" onclick="createTool(4,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>
                        <span className="tool blackedout" data-tooltip="Gilded Hoe" id="greg_tool_5">
                            <span className="tool_price" data-tool-id="5">tool_5</span>
                            <p className="toolnumber" id="greg_tool_5_number">err</p>
                            <img src="./assets/tools/tool_5.png" className="toolicon tool_5" onclick="createTool(5,multibuy[mbsel])" tabindex="0" role="button" />
                        </span>

                        {/* <!-- Progress Bar --> */}
                        <div id="Greg_Bar" className="pbar">
                            <div id="Greg_Progress" className="progress"></div>
                        </div>
                    </div>
                </div>

                {/* <!--Charles Rendering--> */}
                <div className="Charles characterbox box char_locked" id="charles_box">
                    <div className="char_info" id="charles_info">
                        <h2>Charles</h2>
                        <p className="secondary_text">- Scholar -</p>
                        <hr />
                        <div id="charles_debug"></div>

                        <button onclick="closeDialog()">Done</button>
                    </div>
                    <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('charles')" tabindex="0" role="button" />
                    <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('charles')" tabindex="0" role="button" />

                    {/* <!-- Top --> */}
                    <div className="top flex">
                        <img
                            src="./assets/characters/Charles.png"
                            alt="Charles"
                            id="charles_avatar"
                            className="characterimg"
                            title="Charles"
                            onclick="characterInfo('charles')" />
                        <div className="characterdesc">
                            <b id="charles_name" className="character_name">Charles</b>
                            <div className="flex two-pixel-margin-top">
                                <button id="charles_prestige_button" onclick="openPrestigeMenu()" className="charles_prestige_button">
                                    Prestige info
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom shop_bottom" id="charles_shop">
                        {/* <!-- Charles' tomes --> */}
                        <div className="tooltip_area">
                            <div
                                onclick="Charles.improveWorkingConditions.add(multibuy[mbsel])"
                                id="ImproveWorkingConditions_button"
                                className="unbold shop_item flex cant_afford"
                                tabindex="0"
                                role="button">
                                <img src="./assets/items/tome_iwc.png" alt="" className="shop_img tome_iwc" />
                                <div className="info charles_shop_containter">
                                    <p>Improve Working Conditions</p>
                                    <div id="iwc_effect" className="shop_value secondary_text"></div>
                                    <span id="iwc_count" className="secondary_text">x0</span>
                                    <span id="ImproveWorkingConditions" className="shop_price">---</span>
                                </div>
                            </div>

                            <div className="shop_tooltip">
                                Increases Bill and Belle's output
                            </div>
                        </div>

                        <div className="tooltip_area">
                            <div
                                onclick="Charles.betterHoes.add(multibuy[mbsel])"
                                id="BetterHoes_button"
                                className="unbold shop_item flex cant_afford"
                                tabindex="0"
                                role="button">
                                <img src="./assets/items/tome_tools.png" alt="" className="shop_img tome_tools" />
                                <div className="info charles_shop_containter">
                                    <p>High Quality Tools</p>
                                    <div id="bh_effect" className="shop_value secondary_text"></div>
                                    <span id="bh_count" className="secondary_text">x0</span>
                                    <span id="BetterHoes" className="shop_price">---</span>
                                </div>
                            </div>

                            <div className="shop_tooltip">
                                Increases the power of equipped tools
                            </div>
                        </div>

                        <div className="tooltip_area">
                            <div
                                onclick="Charles.decreaseWages.add(multibuy[mbsel])"
                                id="DecreaseWages_button"
                                className="unbold shop_item pointer flex cant_afford"
                                tabindex="0"
                                role="button">
                                <img src="./assets/items/tome_dww.png" alt="" className="shop_img tome_dww" />
                                <div className="info charles_shop_containter">
                                    <p>Decrease Worker Wages</p>
                                    <div id="dww_effect" className="shop_value secondary_text"></div>
                                    <span id="dww_count" className="secondary_text">x0</span>
                                    <span id="DecreaseWages" className="shop_price">---</span>
                                </div>
                            </div>
                            <div className="shop_tooltip">
                                Decreases the rate at which character prices increase
                            </div>
                        </div>

                        {/* <!-- Info --> */}
                        <p className="secondary_text center golden-Carrot-Research">
                            Golden carrot research - Buy tomes
                        </p>

                    </div>
                </div>

            </div>


            {/* <!-- Character column 2 --> */}
            <div className="character_column">

                {/* <!--Jared Rendering--> */}
                <div className="jared characterbox box char_locked" id="jared_box">
                    <div className="char_info" id="jared_info">
                        <h2>Jared</h2>
                        <p className="secondary_text">- Shopkeep -</p>
                        <hr />
                        Sells trinkets that grant special abilities. Trinkets are kept when you prestige.
                    </div>
                    <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('jared')" tabindex="0" role="button" />
                    <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('jared')" tabindex="0" role="button" />

                    {/* <!-- Top --> */}
                    <div className="top flex">
                        <img
                            src="./assets/characters/Jared.png"
                            alt="Jared"
                            id="jared_avatar"
                            className="characterimg"
                            title="Jared"
                            onclick="characterInfo('jared')" />
                        <div className="characterdesc">
                            <b id="jared_name" className="character_name">Jared</b>
                            <p className="secondary_text">
                                Trinket shop
                            </p>
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom shop_bottom">
                        <div id="jared_shop">
                            <div className="center">
                                <img src="./assets/items/trinkets/mouse_2.png" alt="" className="jared-trinket-image" />
                                <img src="./assets/items/trinkets/origami.png" alt="" className="jared-trinket-image" />
                                <img src="./assets/items/trinkets/credit.png" alt="" className="jared-trinket-image" />
                                <br />
                                Interested in some high quality merchandise?
                                <br />
                                <button/>
                                <div id="no_powers" className="power_item jared-shop-boost" /></div>
                        </div>
                    </div>

                    {/* <!--Carl Rendering--> */}
                    <div className="carl characterbox box char_locked" id="carl_box">
                        <div className="char_info" id="carl_info">
                            <h2>Carl</h2>
                            <p className="secondary_text">- Artist -</p>
                            <hr />
                            The artist. Ever get tired of farming carrots? Of course not, but you can still change it up if you so choose.
                        </div>
                        <img src="./assets/icons/palette.svg" alt="Customize" title="Cosmetics" className="button_icon char_mini_button char_custom_button" onclick="cosmeticSwitcher('carl')" tabindex="0" role="button" />
                        <img src="./assets/icons/info.svg" alt="Info" title="Info" className="button_icon char_mini_button char_info_button" onclick="characterInfo('carl')" tabindex="0" role="button" />

                        {/* <!-- Top --> */}
                        <div className="top flex">
                            <img
                                src="./assets/characters/Carl.png"
                                alt="Carl"
                                id="carl_avatar"
                                className="characterimg"
                                title="Carl"
                                onclick="characterInfo('carl')" />
                            <div className="characterdesc flex" />
                            <div>
                                <b id="carl_name" className="character_name">Carl</b>
                                <div className="flex two-pixel-margin-top">
                                    <button id="carl_theme_button" className="char_button new_indicator_theme themeSwitcher" onclick="themeSwitcher()">
                                        Themes
                                    </button>
                                    <button id="carl_cosmetic_button" className="char_button new_indicator_cosmetic cosmeticSwitcher" onclick="cosmeticSwitcher()">
                                        Cosmetics
                                    </button>
                                </div>
                            </div>

                            {/* <!-- <button id="carl_custom_button" className="half_width" onclick="confetti()"> */}
                            {/* Custom */}
                            {/* </button> --> */}
                        </div>
                    </div>

                    {/* <!-- Bottom --> */}
                    <div className="bottom shop_bottom">
                        <div id="carl_shop"></div>
                        {/* <!-- <div className="shop_nav"> */}
                        {/* <div className="shop_nav_item nav_prev" tabindex="0" role="button" onclick="populateCarl(-1)">⯇</div> */}
                        {/* <p className="secondary_text" id="carl_page_indicator">1/4</p> */}
                        {/* <div className="shop_nav_item nav_prev" tabindex="0" role="button" onclick="populateCarl(1)">⯈</div> */}
                        {/* </div> --> */}
                    </div>
                </div>

                {/* <!-- More characters tooltip --> */}
                <br />
                <p className="secondary_text center" id="more_chars_tooltip">
                    Progress through the game to unlock additional characters!
                </p>

                {/* <!-- Advertisement --> */}
                {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1407840358707118" */}
                {/* crossorigin="anonymous"></script> */}
                {/* <!-- Square --> */}
                {/* <ins className="adsbygoogle" */}
                {/* style="display:block" */}
                {/* data-ad-client="ca-pub-1407840358707118" */}
                {/* data-ad-slot="3248600008" */}
                {/* data-ad-format="auto" */}
                {/* data-full-width-responsive="true"></ins> */}
                {/* <script> */}
                {/* (adsbygoogle = window.adsbygoogle || []).push({}); */}
                {/* </script> */}

            </div>
        </section>
    )
}