import { config } from "./main/config";
import { getPhaser } from "./api";
import { scene01 } from "./main/scenes";

let game;

async function getGame() {
  const gameConfig = config(scene01);
  return await getPhaser(gameConfig);
}

getGame().then((component) => {
  game = component;
});

export { game };
