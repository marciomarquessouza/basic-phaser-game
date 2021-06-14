import { Items } from "../../../entities";
import { PhaserHelper } from "./phaser-helper.protocol";
import { sceneHelper } from "./Scene.helper";
import { v4 as uuidv4 } from "uuid";

export type ItemGroupElement = Phaser.Physics.Arcade.Group;
export type ItemElement = Phaser.Physics.Arcade.Sprite;

class ItemHelper implements PhaserHelper {
  private itemsPhaser: PhaserHelper.PhaserElement[] = [];

  getElements(): PhaserHelper.PhaserElement[] {
    return this.itemsPhaser;
  }

  getGroupByName(groupName: string): ItemGroupElement {
    const { element } = this.itemsPhaser.find(({ name }) => name === groupName);
    return element as ItemGroupElement;
  }

  getItemByName(groupName: string, itemName: string): ItemElement {
    const { element } = this.itemsPhaser.find(({ name }) => name === groupName);
    const items = (element as ItemGroupElement).children.getArray();
    return items.find(({ name }) => name === itemName) as ItemElement;
  }

  createItems(items: Items) {
    const { key, repeat, xy, bounceY, name } = items;
    const { scene } = sceneHelper;
    const phaserItem = scene.physics.add.group({ key, repeat, setXY: xy });
    phaserItem.children.iterate((child) => child.setName(uuidv4()));
    if (bounceY) {
      const { start, end } = bounceY;
      phaserItem.children.iterate(function (child: ItemElement) {
        child.setBounceY(Phaser.Math.FloatBetween(start, end));
      });
    }
    this.itemsPhaser.push({ name, element: phaserItem });
  }

  disableItem(groupName: string, itemName: string) {
    const item = this.getItemByName(groupName, itemName);
    item.disableBody(true, true);
  }
}

export const itemHelper = new ItemHelper();
