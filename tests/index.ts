import { config } from "../src/main/config";
import { getPhaser } from "../src/api";
import { scene01 } from "../src/main/scenes";
import "./elements/GameInfo";

const myElement = document.createElement("game-info");
document.body.appendChild(myElement);
let game;

async function getGame() {
  const gameConfig = config(scene01);
  return await getPhaser(gameConfig);
}

getGame().then((component) => {
  game = component;
});

export { game };
