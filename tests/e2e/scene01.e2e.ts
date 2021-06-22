import { NightwatchBrowser } from "nightwatch";

describe("#Test Basic Phaser Game", function () {
  it("check if initial game features are working properly", function (browser: unknown) {
    (browser as NightwatchBrowser)
      .url("http://localhost:5000/")
      .waitForElementVisible("body")
      .waitForElementVisible("canvas")
      .waitForElementVisible("aside")
      .waitForElementVisible("#list-player")
      .assert.titleContains("Test Phaser Game")
      .assert.containsText("#row-player-status", "created")
      .assert.containsText("#row-player-key", "turn")
      .assert.containsText("#row-player-velocityX", "0")
      .end();
  });
});
