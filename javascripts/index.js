import axios from "axios";
import { getCookie, setCookie } from "..helpers/cookie.js";

class GameData {
  constructor(points, upgrades) {
      var _points = points
      this.setPoints = function(points) { _points = points; }
      this.getPoints = function() { return _points; }

      var _upgrades = upgrades
      this.setUpgrade = function(upgrade, val) { _upgrades[val] = upgrade; }
      this.getUpgrade = function(upgrade) { return _upgrade[upgrade]; }
  }
}

document.addEventListener("DOMContententLoaded", () => {
  getUserData();
  loadGame();
  setInterval(() => {
    // Save the game
  }, 30000);
});

// get and store the user game data.
function getUserData() {
  axios.request("/user/gameData", {
    method: "get",
    header: {
      authToken: authToken
    }
  })
  .then((res) => {
    window.gameData = new GameData(res.body.points, res.body.upgrades)
  })
}

// render game data.
function loadGame() {
  window.gameData
}

// saves the game to server
function saveGame() {
  axios.request("/user/gameData", {
    method: "get",
    header: {
      authToken: authToken
    }
  })
}
