import { Scenario } from "../../../entities";
import { PhaserHelper } from "./phaser-helper.protocol";
import { sceneHelper } from "./Scene.helper";

class ScenarioHelper implements PhaserHelper {
  private scenariosPhaser: PhaserHelper.PhaserElement[] = [];

  getElements(): PhaserHelper.PhaserElement[] {
    return this.scenariosPhaser;
  }

  getElementByName(name: string): PhaserHelper.PhaserElement {
    return this.scenariosPhaser.find((scenario) => scenario.name === name);
  }

  createBackground(scenario: Scenario) {
    const { background } = scenario;
    const { scene } = sceneHelper;
    const { x, y, image } = background;
    scene.add.image(x, y, image).setOrigin(0, 0);
  }

  createPlatforms(scenario: Scenario) {
    const { name, platforms } = scenario;
    const { scene } = sceneHelper;
    const phaserPlatform = scene.physics.add.staticGroup();
    platforms.forEach((platform) => {
      if (platform.scale) {
        const { x, y, scale, image } = platform;
        phaserPlatform.create(x, y, image).setScale(scale).refreshBody();
      } else {
        const { x, y, image } = platform;
        phaserPlatform.create(x, y, image);
      }
    });
    this.scenariosPhaser.push({ name, element: phaserPlatform });
  }
}

export const scenarioHelper = new ScenarioHelper();
