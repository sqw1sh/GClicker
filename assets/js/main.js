/* code by sqw1sh */
import {getCookie, setCookie} from './cookie.js';

// give characters
let characters = [];
for(let i=1;i<=localStorage.length;i++) {
  if(localStorage.getItem("character_" + i) != null) {
    characters.push(JSON.parse(localStorage.getItem("character_" + i)));
    // console.log(localStorage.getItem("character_" + i));
  }
}

// characters html
for(let i=0;i<characters.length;i++) {
  document.querySelector('.characters').innerHTML += `
    <div class="col-4">
      <div class="card">
        <img src="../assets/image/${characters[i].card_img}" class="card-img-top">
      <div class="card-body">
        <p class="card-text">
          <i class="bi bi-cursor"></i><span>${fix(characters[i].click)}</span><i class="bi bi-hourglass"></i><span>${fix(characters[i].ps)}</span>
        </p>
        <p class="card-text">
          <i class="bi bi-chevron-up"></i><span id="level-${characters[i].id}">${characters[i].level}</span><i class="bi bi-coin"></i><span id="cost-${characters[i].id}">${fix(characters[i].cost)}</span>
        </p>
        <button type="button" class="btn btn-outline-primary" onclick="buyCharacters('${characters[i].id}')">Купить</button>
      </div>
    </div>
  </div>`;
};

// toasts html
const toastLiveExample = document.getElementById('liveToast');
const toastLiveExample2 = document.getElementById('liveToast2');

// Обновление данных: Баланс, Доход/Клик, Доход/Сек.
setInterval(() => {
  let gClicker = JSON.parse(localStorage.getItem("gClicker"));
  if(document.getElementById('gBalance')) {
    fix(gClicker.balance, 'gBalance');
  }
  if(document.getElementById('gClick')) {
    fix(gClicker.click, 'gClick');
  }
  if(document.getElementById('gPs')) {
    fix(gClicker.ps, 'gPs');
  }
}, 10);

// Доход/сек.
setInterval(() => {
  let gClicker = JSON.parse(localStorage.getItem("gClicker"));
  gClicker.balance = +(gClicker.balance + gClicker.ps).toFixed(2);
  localStorage.setItem('gClicker', JSON.stringify(gClicker));
}, 1000);

// Покупка персонажа.
function buyCharacters(id) {

  let gClicker = JSON.parse(localStorage.getItem("gClicker"));
  let level = "level-" + id;
  let cost = "cost-" + id;

  for(let i=0;i<characters.length;i++) {
    if(+id == characters[i].id) {
      if(gClicker.balance >= characters[i].cost) {
        if(characters[i].level < 90) {
          gClicker.balance = +(gClicker.balance - characters[i].cost).toFixed(2);
          gClicker.click = +(gClicker.click + characters[i].click).toFixed(2);
          gClicker.ps = +(gClicker.ps + characters[i].ps).toFixed(2);

          localStorage.setItem("gClicker", JSON.stringify(gClicker));

          characters[i].level++;
          characters[i].cost = Math.trunc(characters[i].cost * 1.2);

          localStorage.setItem("character_" + (i+1), JSON.stringify(characters[i]));

          document.getElementById(level).innerHTML = characters[i].level;
          fix(characters[i].cost, cost);
          } else {
            const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
            toastBootstrap2.show();
          }
        } else {
          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
          toastBootstrap.show();
        }
      }
    }
  }

  window.buyCharacters = buyCharacters;

  // Доход/Клик.
  document.getElementById('gClickBtn').onclick = () => {
    let gClicker = JSON.parse(localStorage.getItem("gClicker"));
    gClicker.balance = +(gClicker.balance + gClicker.click).toFixed(2);
    localStorage.setItem('gClicker', JSON.stringify(gClicker));
  };

  // Конвертация чисел.
  function fix(value, id) {
    if(id) {
      if(+value > 0 && +value < 1e3) {
        document.getElementById(id).innerHTML = Number(value).toFixed(2);
      } else if(+value > 999 && +value < 1e6) {
        document.getElementById(id).innerHTML = Number(value/1e3).toFixed(2) + " T";
      } else if(+value > 999_999 && +value < 1e9) {
        document.getElementById(id).innerHTML = Number(value/1e6).toFixed(2) + " M";
      } else if(+value > 999_999_999 && +value < 1e12) {
        document.getElementById(id).innerHTML = Number(value/1e9).toFixed(2) + " b";
      } else if(+value > 999_999_999_999 && +value < 1e15) {
        document.getElementById(id).innerHTML = Number(value/1e12).toFixed(2) + " t";
      } else if(+value > 999_999_999_999_999 && +value < 1e18) {
        document.getElementById(id).innerHTML = Number(value/1e15).toFixed(2) + " qa";
      } else if(+value > 999_999_999_999_999_999 && +value < 1e21) {
        document.getElementById(id).innerHTML = Number(value/1e18).toFixed(2) + " qi";
      } else if(+value > 999_999_999_999_999_999_999 && +value < 1e24) {
        document.getElementById(id).innerHTML = Number(value/1e21).toFixed(2) + " sx";
      } else if(+value > 999_999_999_999_999_999_999_999 && +value < 1e27) {
        document.getElementById(id).innerHTML = Number(value/1e24).toFixed(2) + " sp";
      } else if(+value > 999_999_999_999_999_999_999_999_999 && +value < 1e30) {
        document.getElementById(id).innerHTML = Number(value/1e27).toFixed(2) + " o";
      } else if(+value > 999_999_999_999_999_999_999_999_999_999 && +value < 1e33) {
        document.getElementById(id).innerHTML = Number(value/1e30).toFixed(2) + " n";
      }
    } else {
      let res = "";
      if(+value > 0 && +value < 1e3) {
        res = Number(value).toFixed(1);
      } else if(+value > 999 && +value < 1e6) {
        res = Number(value/1e3).toFixed(2) + " T";
      } else if(+value > 999_999 && +value < 1e9) {
        res = Number(value/1e6).toFixed(2) + " M";
      } else if(+value > 999_999_999 && +value < 1e12) {
        res = Number(value/1e9).toFixed(2) + " b";
      } else if(+value > 999_999_999_999 && +value < 1e15) {
        res = Number(value/1e12).toFixed(2) + " t";
      } else if(+value > 999_999_999_999_999 && +value < 1e18) {
        res = Number(value/1e15).toFixed(2) + " qa";
      } else if(+value > 999_999_999_999_999_999 && +value < 1e21) {
        res = Number(value/1e18).toFixed(2) + " qi";
      } else if(+value > 999_999_999_999_999_999_999 && +value < 1e24) {
        res = Number(value/1e21).toFixed(2) + " sx";
      } else if(+value > 999_999_999_999_999_999_999_999 && +value < 1e27) {
        res = Number(value/1e24).toFixed(2) + " sp";
      } else if(+value > 999_999_999_999_999_999_999_999_999 && +value < 1e30) {
        res = Number(value/1e27).toFixed(2) + " o";
      } else if(+value > 999_999_999_999_999_999_999_999_999_999 && +value < 1e33) {
        res = Number(value/1e30).toFixed(2) + " n";
      }
      return res;
    }
  }
