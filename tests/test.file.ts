import { NightwatchBrowser } from "nightwatch";

describe("#Test Basic Phaser Game", function () {
  test("check if body and canvas are working properly", function (browser: unknown) {
    (browser as NightwatchBrowser)
      .url("http://localhost:5000/")
      .waitForElementVisible("body")
      .waitForElementVisible("canvas")
      .assert.titleContains("Basic Phaser Game")
      .end();
  });
});
