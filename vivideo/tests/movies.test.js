const { Browser, Key, By, until } = require("selenium-webdriver")
const webdriver = require("selenium-webdriver")
const assert = require("assert")
const MoviesPage = require("../pages/movies")

describe("Vivideo", () => {
  let driver
  let page

  beforeAll(async () => {
    driver = new webdriver.Builder().forBrowser("chrome").build()
    page = new MoviesPage(driver)
    await page.open()
  })

  afterAll(async () => {
    driver.quit()
  })

  it("should have a list of movies", async () => {
    await driver.wait(until.elementLocated(page.locators.movies))

    const movies = await driver.findElements(page.locators.movies)
    const firstMovie = await movies[0].getText()
    assert(movies.length > 0)
    expect(firstMovie).toMatch("Airplane")
  })
})
