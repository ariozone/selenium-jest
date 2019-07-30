const { Browser, Key, until, By } = require("selenium-webdriver")
const { rsvp: url } = require("../../config.json")

class RsvpPage {
  constructor(driver) {
    this.driver = driver
    this.locators = {
      invitedList: By.id("invitedList"),
      registrationForm: By.id("registrar")
    }
  }
  open() {
    this.driver.get(url)
  }
}

module.exports = RsvpPage
