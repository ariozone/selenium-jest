const { Browser, Key, until, By } = require("selenium-webdriver")
const { rsvp: url } = require("../../config.json")

class RsvpPage {
  constructor(driver) {
    this.driver = driver
    this.locators = {
      invitedList: By.id("invitedList"),
      registrationForm: By.id("registrar"),
      invitees: By.css("#invitedList li")
    }
  }
  open() {
    this.driver.get(url)
  }
}

module.exports = RsvpPage
