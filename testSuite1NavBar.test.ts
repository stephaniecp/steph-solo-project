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

describe("#1 Verify navbar elements are all present", () => {
    test("1.0 Can navigate to the Van's store and return to the home page", async () => {
        await pageObject.clickToAcessStore()
        await pageObject.getElement(pageObject.byCartBtnCss) // Verifying element specific to the Store
        await pageObject.click(pageObject.byVansLogoNavBar) // Returning to the home page
        console.log("1.0 Done - Navigated to the Van's store and return to the home page")
    })
    test("1.1 Can locate the main nav bar elements", async() => { 
        await pageObject.verifyElementsExist(pageObject.getAllMainNavLocators())
        console.log("1.1 Done - Located the main 8 navbar elements")
    })
    test("1.2 Can locate the 9 Aircraft sub menu items", async() => { 
        console.log("Back to main page")
        await pageObject.click(pageObject.byAircraftNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllAircraftNavLocators())
        console.log("1.2 Done - Located all sub menu items below Aircraft")
    })
    test("1.3 Can locate the 8 Learn sub menu items", async() => {  
        await pageObject.click(pageObject.byLearnNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllLearnNavLocators())
        console.log("1.3 Done - Located all sub menu items below Learn")
    })
    test("1.4 Can locate the 7 Build sub menu items", async() => {  
        await pageObject.click(pageObject.byBuildNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllBuildNavLocators())
        console.log("1.4 Done - Located all sub menu items below Build")
    })
    test("1.5 Can locate the 6 Support sub menu items", async() => {  
        await pageObject.click(pageObject.bySupportNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllSupportNavLocators())
        console.log("1.5 Done - Located all sub menu items below Support")
    })
    test("1.6 Can locate the 6 Communauty sub menu items", async() => {  
        await pageObject.click(pageObject.byCommunityNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllCommunityNavLocators())
        console.log("1.6 Done - Located all sub menu items below Community")
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