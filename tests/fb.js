module.exports = {
  'homepage': browser => {
    browser.url('http://facebook.com')
      .waitForElementVisible('body', 1000)
      .pause(10)
    browser.end()
  }
}
