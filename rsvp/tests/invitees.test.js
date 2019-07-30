const { Browser, Key, until, By } = require("selenium-webdriver")
const assert = require("assert")
const webdriver = require("selenium-webdriver")
const { rsvp: url } = require("../../config.json")

describe("RSVP", () => {
  it("should have an invitee list", async () => {
    const driver = await new webdriver.Builder().forBrowser("chrome").build()
    await driver.get(url)
    const elements = await driver.findElements(By.id("invitedList"))
    assert(elements.length > 0)
    driver.quit()
  })
})
