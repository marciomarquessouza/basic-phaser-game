describe("#Test Basic Phaser Game", function () {
  test("check if body and canvas are working properly", function (browser) {
    browser
      .url("http://localhost:5000/")
      .waitForElementVisible("body")
      .waitForElementVisible("canvas")
      .assert.titleContains("Basic Phaser Game")
      .end();
  });
});
