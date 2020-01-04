import axios from "axios"
import { getCookie, setCookie } from "..helpers/cookie.js"

document.addEventListener("DOMContententLoaded", () => {
  setInterval(() => {
    saveGame()
  }, 30000)
})

// saves the game to server
function saveGame() {
  axios.request("/user/gameData", {
    method: "post",
    header: {
      authToken: authToken
    },
    data: {
      ...gameData
    }
  })
}
