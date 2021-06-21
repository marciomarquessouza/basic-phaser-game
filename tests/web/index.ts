import { config } from "../../src/main/config";
import { getPhaser } from "../../src/api";
import { scene01 } from "../../src/main/scenes";
import { SceneObserver } from "../../src/main";
import { playerObserver } from "../../src/main/game-data/player";
import "./style.css";

// const sceneObserver: SceneObserver = function (data) {
//   gameInfo.setAttribute("name", `${data.value}`);
// };

// playerObserver.subscribe(sceneObserver);

console.log("loding...");

async function getGame() {
  const gameConfig = config(scene01);
  window.game = await getPhaser({ ...gameConfig, parent: "game-container" });
}

getGame().then(() => {
  console.log("game loaded");
});
