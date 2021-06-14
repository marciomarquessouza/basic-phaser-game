import { Cursor } from "../../../entities";
import { sceneHelper } from "./Scene.helper";

class CursorHelper {
  private cursorPhaser: Phaser.Types.Input.Keyboard.CursorKeys;

  createCursor() {
    const { scene } = sceneHelper;
    this.cursorPhaser = scene.input.keyboard.createCursorKeys();
  }

  getCursorState(): Cursor {
    return {
      left: { ...this.cursorPhaser.left },
      right: { ...this.cursorPhaser.right },
      up: { ...this.cursorPhaser.up },
      down: { ...this.cursorPhaser.down },
    };
  }
}

export const cursorHelper = new CursorHelper();
