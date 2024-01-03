import './App.css';

//React Hooks
import { useState, useCallback, useEffect, useRef } from 'react';

//React Components
import StatusBar from './React-Components/StatusBar';
import GameSection from './React-Components/GameSection';
import CharacterSection from './React-Components/CharacterSection';
import GameInfoBox from './React-Components/GameInfoBox';

//import objects
import { default_player, default_settings } from './defaultObjects.mjs';

//functions
import { DisplayRounded } from './carrot_utilities.mjs';

//assets
import carrotPNG from './assets/Carrot Clicker.png'
import whiteCursorPNG from './assets/stats/cursor_white.png'
import clockPNG from './assets/stats/clock.png'
import goldenCarrotPNG from "./assets/golden carrot.png"
import tomePagePNG from "./assets/items/tome_page.png"
import cashPNG from "./assets/cash.png"

function App() {
  //setting State objects
  const [Player, setPlayer]     = useState(default_player);
  const [Settings, setSettings] = useState(default_settings);

  /**
   * The function that rewards the player with carrots
   * @param {Number} amount carrots earned
   * @param {String} type Either cpc, cps, or bonus
   * @param {Boolean} useMousePos used for falling carrots
   */
  function earnCarrots(amount, type, useMousePos = false) {
    //object deconstruction updating Player object
    setPlayer({
      ...Player,
      carrots: Player.carrots + amount,
      prestige: {
        ...Player.prestige,
        carrots: Player.prestige.carrots + amount,
        [`${type}_carrots`]: (Player.prestige[`${type}_carrots`] || 0) + amount,
        clicks: type==="cpc" ? Player.prestige.clicks+1 : Player.prestige.clicks
      },
      lifetime: {
        ...Player.lifetime,
        carrots: Player.lifetime.carrots + amount,
        [`${type}_carrots`]: (Player.lifetime[`${type}_carrots`] || 0) + amount,
        clicks:type==="cpc" ? Player.lifetime.clicks+1 : Player.lifetime.clicks
      },
    });

    // Bonus
    //if(type === 'bonus') popupHandler(useMousePos, DisplayRounded(amount, 1), 'falling');
  }

  return (
    <div className="App">
      <StatusBar player={Player} settings={Settings}/>

      {/* Game section and Characters */}
      <div id="container" className="flex">
        <div id="home" className="anchor_offset"></div>

        {/* The Game Section */}
        <GameSection Player={Player} earnCarrots={earnCarrots}/>
        {/* Characters */}
        <div id="characters" className="anchor_offset"></div>
        <CharacterSection/>
      </div>
    </div>
  );
}

export default App;
