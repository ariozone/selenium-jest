const { Browser, Key, until, By } = require("selenium-webdriver")
const assert = require("assert")
const webdriver = require("selenium-webdriver")
const RsvpPage = require("../pages/rsvp")

describe("RSVP", () => {
  let driver
  let page

  beforeAll(async () => {
    driver = new webdriver.Builder().forBrowser("chrome").build()
    page = new RsvpPage(driver)
    await page.open()
  })
  afterAll(async () => {
    await driver.quit()
  })

  it("should have an invitee list", async () => {
    const elements = await driver.findElements(page.locators.invitedList)
    assert(elements.length > 0)
  })

  it("should have a registration form", async () => {
    const elements = await driver.findElements(page.locators.registrationForm)
    //assert(elements.length > 0)
    expect(elements.length).toBeGreaterThan(0)
  })

  it("should load existing invitations", async () => {
    await driver.manage().setTimeouts({ implicit: 3000 })
    const elements = await driver.findElements(page.locators.invitees)
    const text = await elements[1].getText()
    expect(text).toMatch("Craig Dennis")
  })

  it("should load existing invitations", async () => {
    const list = await driver.findElement(page.locators.invitedList)
    await driver.wait(until.elementLocated(page.locators.invitees))
    const text = await list.getText()
    assert(text.includes("Craig Dennis"))
  })
})
