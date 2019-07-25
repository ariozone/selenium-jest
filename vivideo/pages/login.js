const { vivideo: url } = require("../../config.json")
const By = require("selenium-webdriver").By
class Login {
  constructor(driver) {
    this.driver = driver
    this.locators = {
      username: By.id("username")
    }
  }
  open() {
    this.driver.get(url + "/login")
  }
}
module.exports = Login
