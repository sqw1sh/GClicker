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

loadBtn.onclick = loadGame;

if(localStorage.getItem("gClicker")) {
  loadBtn.style.display = 'none';
  document.querySelector('.load').innerHTML = `<a href="game/index.html"><button type="button" class="btn btn-outline-info" id="play">Продолжить игру</button></a>`;
} else {
  loadBtn.style.display = '';
  play.style.display = 'none';
}
