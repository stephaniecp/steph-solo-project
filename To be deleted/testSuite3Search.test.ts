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

// describe("", () => {
//     test("Can do a search and find relevant content", async() => {
//       await pageObject.search('Aircraft')
//       let text = await pageObject.getResults()
//       expect(text).toContain('Aircraft')
//     })
// })

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
}); 