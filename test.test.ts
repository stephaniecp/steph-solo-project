import { SearchSource } from 'jest'
import {PageObject} from './mainPageObject'
import {storePageObject} from './storePageObject'
const pageObject = new PageObject()

describe("Test suite 1: Reality check", () => {

    beforeAll(async () => {
        await pageObject.navigate()
    // Will set the browser to maximum screen size (to get more reliable locators, which changes with browser size)
        await pageObject.driver.manage().window().maximize()
    })

    test("Test case: can navigate to the Van's store", async () => {
        console.log("Found webpage")  
        await pageObject.clickToAcessStore()
        console.log("Found/clicked CTA to access store")
        await pageObject.getElement(pageObject.byCartBtnCss)
        console.log("Found the cart button")
    })

    afterAll(async () => {
        await pageObject.driver.quit()
        console.log("Browser quit after Test suite 1")
    });

})