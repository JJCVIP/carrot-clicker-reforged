import './App.css';

//React Hooks
import { useState, useCallback, useEffect, useRef } from 'react';

//React Components
import StatusBar from './React-Components/StatusBar';
import GameSection from './React-Components/GameSection';
import CharacterSection from './React-Components/CharacterSection';
import GameInfoBox from './React-Components/GameInfoBox';

//import objects
import { default_player, default_settings, default_Boomer_Bill, default_Greg, default_Belle_Boomerette} from './defaultObjects.mjs';

//functions
import { DisplayRounded, getLevelPrice } from './carrot_utilities.mjs';


function App() {
  /*-----setting State objects-----*/
  const [Player, setPlayer]     = useState(default_player);
  const [Settings, setSettings] = useState(default_settings);

  //characters
  const [Boomer_Bill, setBoomer_Bill] = useState(default_Boomer_Bill);
  const [Belle_Boomerette, setBelle_Boomerette] = useState(default_Belle_Boomerette)
  const [Greg, setGreg] = useState(default_Greg);


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
  function levelUp(character,amount){
    const totalCost=getLevelPrice(character,amount,null,null)
    console.log(totalCost)
    if(Player.carrots<totalCost) return
    const characterMap = {
      Boomer_Bill : setBoomer_Bill,
      Belle_Boomerette : setBelle_Boomerette
    }
    characterMap['Boomer_Bill'](
      {...character, lvl:character.lvl+amount}
    )
    setPlayer(
      {...Player, carrots:Player.carrots-=totalCost}
    )
    //temp setPlayerCpc
    setPlayer(
      {...Player, cpc:Boomer_Bill.lvl+1}
    )
  }



  /**
   * 
   * @param {*} character 
   * @param {*} tool 
   * @param {*} amount 
   * @returns 
   */
  function equipTool(character,tool,amount){
    if(Greg.Hoes[tool]<amount) return
    
    const characterMap = {
      Boomer_Bill : setBoomer_Bill,
      Belle_Boomerette : setBelle_Boomerette
    }
    characterMap[character.name](
      {...character, Hoes:(character.Hoes.toSpliced(tool,1,character.Hoes[tool]+amount))}
    );
    setGreg({...Greg, Hoes:Greg.Hoes.toSpliced(tool,1,Greg.Hoes[tool]-amount)})
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
        <CharacterSection Bill={Boomer_Bill} Belle={Belle_Boomerette} Greg={Greg} levelUp={levelUp} equipTool={equipTool}/>
      </div>
    </div>
  );
}

export default App;
