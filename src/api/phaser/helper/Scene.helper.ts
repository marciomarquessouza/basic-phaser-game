import Phaser from "phaser";
import { SceneElement } from "../../../entities";
import { itemHelper, ItemElement } from "./Item.helper";
import { PhaserHelper } from "./phaser-helper.protocol";
import { playerHelper } from "./Player.helper";
import { scenarioHelper } from "./Scenario.helper";

class SceneHelper {
  private _scene: Phaser.Scene;
  private loader: Phaser.Loader.LoaderPlugin;

  initialize(scene: Phaser.Scene) {
    this._scene = scene;
  }

  initializeLoader(scene: Phaser.Scene) {
    this.loader = scene.load;
  }

  get scene(): Phaser.Scene {
    return this._scene;
  }

  getSceneElementByName(name: string): PhaserHelper.PhaserElement {
    const playerElements = playerHelper.getElements();
    const scenarioElements = scenarioHelper.getElements();
    const itemsElements = itemHelper.getElements();
    const elements = [...playerElements, ...scenarioElements, ...itemsElements];
    return elements.find((element) => element.name === name);
  }

  addColliders(
    object1: SceneElement,
    object2: SceneElement,
    callback?: (obj1: ItemElement, obj2: ItemElement) => void
  ) {
    const { element: obj1 } = this.getSceneElementByName(object1.name);
    const { element: obj2 } = this.getSceneElementByName(object2.name);
    this._scene.physics.add.collider(obj1, obj2, callback, null, this._scene);
  }

  addOverlap(
    object1: SceneElement,
    object2: SceneElement,
    callback: (obj1: ItemElement, obj2: ItemElement) => void
  ) {
    const { element: obj1 } = this.getSceneElementByName(object1.name);
    const { element: obj2 } = this.getSceneElementByName(object2.name);
    this._scene.physics.add.overlap(obj1, obj2, callback, null, this._scene);
  }

  loadImage(name: string, path: string) {
    this.loader.image(name, path);
  }

  loadSpriteSheet(name: string, path: string, width: number, height: number) {
    this.loader.spritesheet(name, path, {
      frameWidth: width,
      frameHeight: height,
    });
  }
}

export const sceneHelper = new SceneHelper();
