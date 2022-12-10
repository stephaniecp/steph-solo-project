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

describe("Test suite 1: Home page check", () => {
    test("1.1 Can locate the main nav bar elements", async() => { 
        // Returns to home page (necessary after running Test Suite 0)
        await pageObject.navigate()
        // Verify each main menu items
        await pageObject.verifyElementsExist(pageObject.getAllMainNavLocators())
        console.log("Located the main 8 navbar elements")
    })
    test("1.2 Can locate the 9 Aircraft sub menu items", async() => { 
        console.log("Back to main page")
        await pageObject.click(pageObject.byAircraftNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllAircraftNavLocators())
        console.log("Located all sub menu items below Aircraft")
    })
    test("1.3 Can locate the 8 Learn sub menu items", async() => {  
        await pageObject.click(pageObject.byLearnNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllLearnNavLocators())
        console.log("Located all sub menu items below Learn")
    })
    test("1.4 Can locate the 7 Build sub menu items", async() => {  
        await pageObject.click(pageObject.byBuildNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllBuildNavLocators())
        console.log("Located all sub menu items below Build")
    })
    test("1.5 Can locate the 6 Support sub menu items", async() => {  
        await pageObject.click(pageObject.bySupportNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllSupportNavLocators())
    })
    test("1.6 Can locate the 6 Communauty sub menu items", async() => {  
        await pageObject.click(pageObject.byCommunityNavCss)
        await pageObject.verifyElementsExist(pageObject.getAllCommunityNavLocators())
    })
    test("1. 7Can locate the key parts of the home part outside of the nav bar", async() => {  
        await pageObject.verifyElementsExist(pageObject.getAllHomePageLocators())
    })
})
   

// test("", async() => {  
// })

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});