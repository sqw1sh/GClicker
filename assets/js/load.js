import {getCookie, setCookie} from './cookie.js';

function loadGame() {
  $.getJSON('https://sqw1sh.github.io/GClicker/game/characters/DEFAULT.json', function(data) {

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
}

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

if(getOS() == 'iOS' || getOS() == 'Android') {
  loadBtn.display = "none";
  document.querySelector(".device").display = "block";
}

alert(getOS());
