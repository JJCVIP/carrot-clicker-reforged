import { useEffect, useState } from "react"

export default function Credits({ close }) {
    // Auto-scroll
    let [autoscroll, setAutoscroll] = useState(true);
    useEffect(() => {
        let interval;
        if(autoscroll) {
            interval = setInterval(() => {
                const elCredits = document.getElementById("credits");
    
                elCredits.scrollTop += 1;
                if(elCredits.scrollHeight - elCredits.scrollTop === elCredits.clientHeight) clearInterval(interval);
            }, 30)
        }

        return () => clearInterval(interval);
    }, [autoscroll]);

    /** End credits auto-scroll */
    function endAutoscroll() { setAutoscroll(false); }

    return (
        <div id="credits" class="center" onWheel={endAutoscroll} onPointerDown={endAutoscroll}>
            <h1 class="credits_underline">Credits</h1>
            <br/>

            <span class="secondary_text">Original Concept</span><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">Gameplay</span><br/>
            <b>JJCVIP</b><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">Game Balance & Clicker Game Math</span><br/>
            <b>JJCVIP</b><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">UI/UX</span><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">Achievement, Statistics, Theme, & Cosmetics Systems</span><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">Pixel Art</span><br/>
            <b>not-the</b><br/>
            <br/>

            <span class="secondary_text">Character Designs & Worldbuilding</span><br/>
            <b>JJCVIP</b><br/>
            <br/>

            <span class="secondary_text">Sound Effects & Music</span><br/>
            <b>JJCVIP</b><br/>
            <br/><br/><br/> <br/>

            <h3 class="credits_underline">Special Thanks</h3><br/>
            <span class="secondary_text">Additional Cosmetics & Ideas</span><br/>
            <b>UniverseNarwhal</b><br/>
            <br/>

            <span class="secondary_text">Playtesters</span><br/>
            <b>UniverseNarwhal</b><br/>
            <b>Woff1</b><br/>
            <b>GuntherTheGod</b><br/>
            <br/>
            <br/>
            <br/>

            <span class="secondary_text">Image Attribution:</span><br/>
            Carrot, money bag, cookie, and pineapple images from <a href="https://github.com/googlefonts/noto-emoji" target="_blank" rel="noopener noreferrer">Google's Noto Emoji Icons</a> (Apache License 2.0)<br/>
            <a target="_blank" href="https://icons8.com/icon/83214/settings">Settings icon</a> from <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a><br/>
            <a href="https://www.flaticon.com/free-icon/medal_1895474" target="_blank" rel="noopener noreferrer">Medal icon</a> made by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">www.flaticon.com</a><br/>
            <a href="https://commons.wikimedia.org/wiki/File:PICOL_icon_Light.svg" target="_blank" rel="noopener noreferrer">Lightbulb Icon</a> made by <a href="https://commons.wikimedia.org/wiki/File:PICOL_icon_Light.svg" target="_blank" rel="noopener noreferrer">PICOL, PIctorial COmmunication Language</a>, <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:Speaker_Icon.svg" target="_blank" rel="noopener noreferrer">Speaker Icon</a> and <a href="https://commons.wikimedia.org/wiki/File:Mute_Icon.svg" target="_blank" rel="noopener noreferrer">Mute Icon</a> by Mobius, Public domain, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:Map_icons_by_Scott_de_Jonge_-_art-gallery.dsvg" target="_blank" rel="noopener noreferrer">Palette icon</a> made by <a href="https://commons.wikimedia.org/wiki/File:Map_icons_by_Scott_de_Jonge_-_art-gallery.svg" target="_blank" rel="noopener noreferrer">Scott de Jonge</a>, <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:Clothes_hanger_icon_3.svg">Clothes Hanger Icon</a> Paris 16, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:Faenza-input-keyboard-symbolic.svg" target="_blank" rel="noopener noreferrer">Keyboard icon</a> made by Matthieu James, <a href="http://www.gnu.org/licenses/gpl.html" target="_blank" rel="noopener noreferrer">GPL</a>, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:External_Link_(89630)_-_The_Noun_Project.svg" target="_blank" rel="noopener noreferrer">External Link icon</a> made by Consumer Financial Protection Bureau, CC0, via Wikimedia Commons<br/>
            <a href="https://commons.wikimedia.org/wiki/File:High-contrast-system-lock-screen.svg" target="_blank" rel="noopener noreferrer">Padlock Icon</a>, <a href="http://www.gnu.org/licenses/lgpl.html" target="_blank" rel="noopener noreferrer">LGPL</a>, via Wikimedia Commons<br/>
            <a href="https://www.flaticon.com/free-icons/share" title="share icons" target="_blank" rel="noopener noreferrer">Share icons created by Bankume - Flaticon</a><br/>
            Dirt background image from <a href="https://andersonseedsmn.com/home/dirt-background/" target="_blank" rel="noopener noreferrer">https://andersonseedsmn.com/home/dirt-background/</a><br/>
            {/* <!-- <a href="https://commons.wikimedia.org/wiki/File:Reload_icon_-_Green.svg">Reload Icon</a> by Wenflou, CC0, via Wikimedia Commons --> */}<br/>
            {/* <!-- <a href="https://commons.wikimedia.org/wiki/File:Right_arrow.svg">User:Superm401</a>, Public domain, via Wikimedia Commons --> */}<br/>
            <a href="https://commons.wikimedia.org/wiki/File:Antu_document-save-as-template.svg">Floppy Disk Icon</a>: Fabián Alexis, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons<br/>
            <br/>

            <span class="secondary_text">And thanks to:</span><br/>
            W3Schools, Stack Overflow, and MDN Web Docs<br/>
            For being reliable sources of information<br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <h1>Carrot Clicker</h1><br/>
                <p class="secondary_text">
                    Carrot Clicker Project 2021 - 2024<br/>
                    © All rights reserved
                </p><br/><br/>
                <button onClick={close} style={{"width":"200px"}}>Done</button>
                {/* <!-- <img src="./assets/theme/pixel_carrot.png" alt="Carrot Clicker" class="footer_carrot"> --> */}
            </div>
        </div>
    )
}