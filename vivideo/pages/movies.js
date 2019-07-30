const { vivideo: url } = require("../../config.json")
const { Browser, Key, By, until } = require("selenium-webdriver")

class MoviesPage {
  constructor(driver) {
    this.driver = driver
    this.locators = {
      moviesTable: By.css("tbody"),
      movies: By.xpath("//tbody/tr/td[1]")
    }
  }
  open() {
    this.driver.get(url)
  }
}

module.exports = MoviesPage
