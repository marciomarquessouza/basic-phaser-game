import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("game-info")
export class GameInfo extends LitElement {
  @property()
  name = "waiting";

  render() {
    return html`<h1>${this.name}</h1>`;
  }
}
