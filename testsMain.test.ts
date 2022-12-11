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

describe("#1 Navbar elements + store and logo links", () => {
    test("1.0 Can navigate to the Van's store and return to the home page", async () => {
        await pageObject.clickToAcessStore()
        await pageObject.getElement(pageObject.byCartBtnCss) // Verifying element specific to the Store
        await pageObject.click(pageObject.byVansLogoNavBar) // Returning to the home page
        console.log("Navigated to the Van's store and returned to the home page")
    })
    test("1.1 Can locate the nav bar menu items", async() => { 
        // Main
        await pageObject.verifyElementsExist(pageObject.getAllMainNavLocators())
        console.log("Located the main 8 navbar elements")
        // Aircraft
        console.log("Back to main page")
        await pageObject.click(pageObject.byAircraftNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllAircraftNavLocators())
        console.log("Located all sub menu items below Aircraft")
        // Learn
        await pageObject.click(pageObject.byLearnNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllLearnNavLocators())
        console.log("Located all sub menu items below Learn")
        // Build
        await pageObject.click(pageObject.byBuildNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllBuildNavLocators())
        console.log("Located all sub menu items below Build")
        // Support
        await pageObject.click(pageObject.bySupportNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllSupportNavLocators())
        console.log("Located all sub menu items below Support")
        // Community
        await pageObject.click(pageObject.byCommunityNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllCommunityNavLocators())
        console.log("Located all sub menu items below Community")
    })
})

describe("#2 Home page testing", () => {

    test("2.0 Can locate the key parts of the home part outside of the nav bar", async() => {  
        await pageObject.verifyElementsExist(pageObject.getAllHomePageLocators())
    })
    test("2.1 Take screenshot of the home page", async() => {
        await pageObject.takeScreenShot(`${__dirname}/archive/screenshots/vansScreenshot.png`)
    })
})

describe("#3 Search function", () => {
    test("Can do a search and find relevant content", async() => {
      await pageObject.search('Aircraft')
      let text = await pageObject.getResults()
      expect(text).toContain('Aircraft')
    })
})

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});