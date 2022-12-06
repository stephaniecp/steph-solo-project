import {PageObject} from './pageObject'
const pageObject = new PageObject()

describe("Test suite 1: Reality check", () => {

    beforeAll(async () => {
        await pageObject.navigate()
    })

    test("Test case: can navigate to the Van's store", async () => {
        console.log("Found webpage")  
        await pageObject.clickToAcessStore()
        console.log("Found/clicked CTA to access store")
        await pageObject.getElement(pageObject.byCartBtnUrl)
        console.log("Found the cart button")
    })

    afterAll(async () => {
        await pageObject.driver.quit()
        console.log("Browser quit after Test suite 1")
    });

})