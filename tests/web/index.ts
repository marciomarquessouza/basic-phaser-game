import { config } from "../../src/main/config";
import { getPhaser } from "../../src/api";
import { scene01 } from "../../src/main/scenes";
import { updateStatusByObserver } from "./update-status-by-observer";
import { playerObserver } from "../../src/main/game-data/player";
import "./style.css";

console.log("loding...");

updateStatusByObserver(playerObserver);

async function getGame() {
  const gameConfig = config(scene01);
  window.game = await getPhaser({ ...gameConfig, parent: "game-container" });
}

getGame().then(() => {
  console.log("game loaded");
});
