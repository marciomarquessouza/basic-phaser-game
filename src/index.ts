import { config } from "./main/config";
import { getPhaser } from "./api";

let game;
const gameConfig = config();

getPhaser(gameConfig).then((component) => {
  game = component;
});

export { game };
