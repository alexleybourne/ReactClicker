import axios from "axios";
import { getCookie, setCookie } from "..helpers/cookie.js";

document.addEventListener("DOMContententLoaded", () => {
  checkLoggedIn()
  getUserData()
  loadGame()
  setInterval(() => {
    // Save the game
  }, 30000)
})

// set to login page if user is not logged in.
function checkLoggedIn() {
  authToken = getCookie('authToken')
  if(authToken) {

  }
}

// get and store the user game data.
function getUserData() {
}

// render game data.
function loadGame() {
}

function saveGame() {

}
