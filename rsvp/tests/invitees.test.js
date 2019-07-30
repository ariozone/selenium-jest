const { Browser, Key, until, By } = require("selenium-webdriver")
const assert = require("assert")
const webdriver = require("selenium-webdriver")
const { rsvp: url } = require("../../config.json")

describe("RSVP", () => {
  let driver

  beforeAll(async () => {
    driver = new webdriver.Builder().forBrowser("chrome").build()
    await driver.get(url)
  })
  afterAll(async () => {
    await driver.quit()
  })

  it("should have an invitee list", async () => {
    const elements = await driver.findElements(By.id("invitedList"))
    assert(elements.length > 0)
  })
  it("should have a registration form", async () => {
    const elements = await driver.findElements(By.id("registrar"))
    assert(elements.length > 0)
  })
})
