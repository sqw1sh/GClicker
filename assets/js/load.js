import {getCookie, setCookie} from './cookie.js';

function loadGame() {
  $.getJSON('http://gclicker/game/characters/DEFAULT.json', function(data) {
    
      for(let i=0;i<data.length;i++) {
        localStorage.setItem("character_" + data[i].id, JSON.stringify(data[i]));
      };

      let gClicker = {
        balance: 0,
        click: 1,
        ps: 0
      };

      localStorage.setItem("gClicker", JSON.stringify(gClicker));
  });
}
