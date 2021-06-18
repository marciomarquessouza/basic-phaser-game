import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("game-info")
export class GameInfo extends LitElement {
  render() {
    return html`<h1>Example of LitElement</h1>`;
  }
}
