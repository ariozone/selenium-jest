const webdriver = require("selenium-webdriver")
const By = webdriver.By
const { vivideo: url } = require("../config.json")
require("chromedriver")

const driver = new webdriver.Builder().forBrowser("chrome").build()

driver.get(url + "/login")

const locators = {
  username: By.id("username"),
  password: By.id("password"),
  loginButton: By.css("button")
}

const login = async (user, pass) => {
  try {
    driver.findElement(locators.username).sendKeys(user)
    driver.findElement(locators.password).sendKeys(pass)
    await driver.findElement(locators.loginButton).click()
  } catch (error) {
    console.log(error)
  }
}

login("user@domain.com", "Aa@123")
