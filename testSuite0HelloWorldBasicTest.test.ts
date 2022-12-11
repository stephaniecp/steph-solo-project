import {expect, jest, test} from '@jest/globals' // See https://jestjs.io/docs/jest-object
import { SearchSource } from 'jest'
import {PageObject} from './mainPageObject'
import {storePageObject} from './storePageObject' 
const pageObject = new PageObject()

describe.skip("Test suite 0: Reality check", () => {
    
    test("Hello World Test", async () => {
        console.log("An empty test") 
    })
})

afterAll(async () => {
    await pageObject.driver.quit()
});