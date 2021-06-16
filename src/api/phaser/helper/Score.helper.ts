import { sceneHelper } from "./Scene.helper";

class ScoreHelper {
  private scorePhaser: Phaser.GameObjects.Text;

  createScore(
    x: number,
    y: number,
    text: string,
    style?: Phaser.Types.GameObjects.Text.TextStyle
  ) {
    const { scene } = sceneHelper;
    this.scorePhaser = scene.add.text(x, y, text, style);
  }

  updateScore(text: string) {
    this.scorePhaser.setText(text);
  }
}

export const scoreHelper = new ScoreHelper();
