import { SceneElement } from "./Scene";

export class Items implements SceneElement {
  name: string;
  key: string;
  repeat: number;
  xy: { x: number; y: number; stepX: number };
  bounceY?: { start: number; end: number };
}
