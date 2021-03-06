import { ANIMATION_KEY, ANIMATION_TYPE } from "../constants";
import { SceneElement } from "./Scene";

export interface PlayerAnimation {
  key: ANIMATION_KEY;
  frames:
    | {
        type: ANIMATION_TYPE.MULTI;
        key: string;
        start: number;
        end: number;
      }
    | {
        type: ANIMATION_TYPE.UNO;
        frame: { key: string; frame: number }[];
      };
  frameRate: number;
  repeat?: number;
}

export interface Sprite {
  x: number;
  y: number;
  image: string;
}

export interface Velocity {
  x?: number;
  y?: number;
}

type PlayerStatus = "idle" | "created" | "error";

export class Player implements SceneElement {
  name: string;
  status: PlayerStatus;
  sprite: Sprite;
  bounce: number;
  isCollideWorldBounds: boolean;
  animations: PlayerAnimation[];
  key?: ANIMATION_KEY;
  ignoreIfPlaying?: boolean;
  velocityX?: number;
  velocityY?: number;
  none?: boolean;
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;

  constructor(props: Player) {
    Object.assign(this, props);
  }
}
