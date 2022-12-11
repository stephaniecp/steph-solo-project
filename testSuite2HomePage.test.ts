import {expect, jest, test} from '@jest/globals' // See https://jestjs.io/docs/jest-object
import { SearchSource } from 'jest'
import {PageObject} from './mainPageObject'
import {storePageObject} from './storePageObject' 
const pageObject = new PageObject()

beforeAll(async () => {
  await pageObject.navigate()
  await pageObject.driver.manage().window().maximize()
  await pageObject.showMouseMovement()
})

describe("Test suite 2: Home page testing", () => {

    test("2.1 Can locate the key parts of the home part outside of the nav bar", async() => {  
        await pageObject.verifyElementsExist(pageObject.getAllHomePageLocators())
    })

    test("2.2 Take screenshot of the home page", async() => {
        await pageObject.takeScreenShot(`${__dirname}/archive/screenshots/vansScreenshot.png`)
    })
})

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});