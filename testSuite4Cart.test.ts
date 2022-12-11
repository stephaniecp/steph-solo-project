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

describe("", () => {
    test("", async() => {

    })
})

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});