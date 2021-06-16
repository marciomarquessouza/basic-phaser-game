export namespace PhaserHelper {
  export type PhaserElement = {
    name: string;
    element:
      | Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
      | Phaser.Physics.Arcade.StaticGroup
      | Phaser.Physics.Arcade.Group;
  };
}

export interface PhaserHelper {
  getElements(): PhaserHelper.PhaserElement[];
}
