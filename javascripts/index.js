import axios from "axios";
import { getCookie, setCookie } from "..helpers/cookie.js";

document.addEventListener("DOMContententLoaded", async () => {
  await getUserData();
  loadGame();
  setInterval(() => {
    saveGame();
  }, 30000);
});

// get and store the user game data.
function getUserData() {
  axios
    .request("/user/gameData", {
      method: "get",
      header: {
        authToken: authToken
      }
    })
    .then(res => {
      window.gameData = res.body;
    });
}

// render game data.
function loadGame() {
  counter = document.getElementById("counter");
  counter.textContent = gameData.points;

  // render upgrades
}

// saves the game to server
function saveGame() {
  axios.request("/user/gameData", {
    method: "post",
    header: {
      authToken: authToken
    },
    data: {}
  });
}
