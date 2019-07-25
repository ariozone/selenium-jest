const webdriver = require("selenium-webdriver")
const By = require("selenium-webdriver").By
require("chromedriver")
const HomePage = require("./pages/login")
const driver = new webdriver.Builder().forBrowser("chrome").build()
const homePage = new HomePage(driver)
homePage.open()

// driver.findElement(By.partialLinkText("login")).click()
