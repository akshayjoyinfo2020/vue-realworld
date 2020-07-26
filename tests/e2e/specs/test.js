// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".banner")
      .assert.containsText("h1", "conduit")
      .assert.containsText("p", "A place to share your knowledge.")
      .end();
  }
};
