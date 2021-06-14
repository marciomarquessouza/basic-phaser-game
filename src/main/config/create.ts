import { sceneHelper } from "../../api";
import {
  createPlayer,
  createScenario,
  createItem,
  createCursor,
  addColliders,
  addOverlap,
  disableItemCallback,
  createScore,
  updateScoreCallback,
} from "../factories";
import { player, scenario, stars, score } from "../game-data";
import { overlapCallbackAdapter } from "../adapters";

export function create() {
  sceneHelper.initialize(this);
  createScenario.execute(scenario);
  createPlayer.execute(player);
  createItem.execute(stars);
  createScore.execute(score);
  addColliders.execute({ object1: player, object2: scenario });
  addColliders.execute({ object1: stars, object2: scenario });
  addOverlap.execute({
    object1: player,
    object2: stars,
    callback: overlapCallbackAdapter(disableItemCallback, updateScoreCallback),
  });
  createCursor.execute();
}
