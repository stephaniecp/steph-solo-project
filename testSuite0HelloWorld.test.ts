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
console.log("BEFORE ALL - Browser opens at Url + maximizes + show")


describe("Test suite 1: Reality check", () => {
    
    test("Test case: can navigate to the Van's store", async () => {
        console.log("Found webpage")  
        await pageObject.clickToAcessStore()
        console.log("Found/clicked CTA to access store")
        await pageObject.getElement(pageObject.byCartBtnCss)
        console.log("End of Test Suite #1 - Found the cart button")
    })
})

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});