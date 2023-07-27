import '../css/style.css';
import { darkModeHandle } from "./utils.js";
import { startGame } from "./game.js";

darkModeHandle()

const startGameButton =  document.getElementById('startgame')
startGameButton.addEventListener('click', startGame)