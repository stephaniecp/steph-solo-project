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

describe("Test suite 2: Home page check", () => {
    test("Can locate the main nav bar elements", async() => { 
        // Returns to home page
        await pageObject.navigate()
        // Verify each main menu items
        await pageObject.verifyElementExists(pageObject.byAircraftNavCss)
        await pageObject.verifyElementExists(pageObject.byLearnNavCss)
        await pageObject.verifyElementExists(pageObject.byBuildNavCss)
        await pageObject.verifyElementExists(pageObject.bySupportNavCss)
        await pageObject.verifyElementExists(pageObject.byCommunityNavCss)
        await pageObject.verifyElementExists(pageObject.byStoreNavIdDesktop)
        await pageObject.verifyElementExists(pageObject.bySearchNavBar)
        await pageObject.verifyElementExists(pageObject.byOrderAKitNavCta)
        console.log("Located the main 8 navbar elements")
    })
    test("Can locate the 9 Aircraft sub menu items", async() => { 
        console.log("Back to main page")
        await pageObject.clickToAircraftNav()
        await pageObject.verifyElementExists(pageObject.byAirplaneRv15)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv14)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv12is)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv10)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv9)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv8)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv7)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv4)
        await pageObject.verifyElementExists(pageObject.byAirplaneRv3)
        console.log("Located all sub menu items below Aircraft")
    })
    test("Can locate the 8 Learn sub menu items", async() => {  
        await pageObject.click(pageObject.byLearnNavCss)
        await pageObject.verifyElementExists(pageObject.bylearnRvDesign)
        await pageObject.verifyElementExists(pageObject.byLearnFlyingAnRv)
        await pageObject.verifyElementExists(pageObject.byLearnSafety)
        await pageObject.verifyElementExists(pageObject.byLearnWhichRvIsRight)
        await pageObject.verifyElementExists(pageObject.byLearnRvFlightTraining)
        await pageObject.verifyElementExists(pageObject.byLearnConstruction)
        await pageObject.verifyElementExists(pageObject.byLearnDemo)
        await pageObject.verifyElementExists(pageObject.byLearnFaq)
        console.log("Located all sub menu items below Learn")
    })
    test("Can locate the 7 Build sub menu items", async() => {  
        await pageObject.click(pageObject.byBuildNavCss)
        await pageObject.verifyElementExists(pageObject.byBuildBuildinganRv)
        await pageObject.verifyElementExists(pageObject.byBuildStandardKits)
        await pageObject.verifyElementExists(pageObject.byBuildQuickbuild)
        await pageObject.verifyElementExists(pageObject.byBuildPowerplants)
        await pageObject.verifyElementExists(pageObject.byBuildPropellers)
        await pageObject.verifyElementExists(pageObject.byBuildTools)
        await pageObject.verifyElementExists(pageObject.byBuildStemPrograms)
        console.log("Located all sub menu items below Build")
    })
    test("Can locate the 6 Support sub menu items", async() => {  
        await pageObject.click(pageObject.bySupportNavCss)
        await pageObject.verifyElementExists(pageObject.bySupportBuilder)
        await pageObject.verifyElementExists(pageObject.bySupportSafety)
        await pageObject.verifyElementExists(pageObject.bySupportSlsa)
        await pageObject.verifyElementExists(pageObject.bySupportPlans)
        await pageObject.verifyElementExists(pageObject.bySupportTech)
        await pageObject.verifyElementExists(pageObject.bySupportDownloads)
    })
    test("Can locate the 6 Communauty sub menu items", async() => {  
        await pageObject.click(pageObject.byCommunityNavCss)
        await pageObject.verifyElementExists(pageObject.byCommunautyStories)
        await pageObject.verifyElementExists(pageObject.byCommunautyBuilderGr)
        await pageObject.verifyElementExists(pageObject.byCommunautyFirstFlights)
        await pageObject.verifyElementExists(pageObject.byCommunautyNews)
        await pageObject.verifyElementExists(pageObject.byCommunautyEvents)
        await pageObject.verifyElementExists(pageObject.byCommunautyInternetR)
    })
    test("Can locate the key parts of the home part outside of the nav bar", async() => {  
        await pageObject.verifyElementExists(pageObject.byHomeHeroImageSection)
        await pageObject.verifyElementExists(pageObject.byHomeContainerRvCount)
        await pageObject.verifyElementExists(pageObject.byHomeContainerRvCountCta)
        await pageObject.verifyElementExists(pageObject.byHomeEmailSignUp)
        await pageObject.verifyElementExists(pageObject.byHomeEmailSignUpCta)
        await pageObject.verifyElementExists(pageObject.byHomeContainerBuildingAnRv)
        await pageObject.verifyElementExists(pageObject.byHomeContainerBuildingAnRvCta)
        await pageObject.verifyElementExists(pageObject.byHomeContainerFunSafe)
        await pageObject.verifyElementExists(pageObject.byHomeContainerFunSafeCta)
        await pageObject.verifyElementExists(pageObject.byHomeContainerGetOff)
        await pageObject.verifyElementExists(pageObject.byHomeContainerGetOffCta)
        await pageObject.verifyElementExists(pageObject.byHomeContainerVideoBanner)
        await pageObject.verifyElementExists(pageObject.byHomeContainerFooterNavigation)
    })
})
   

// test("", async() => {  
// })

afterAll(async () => {
    await pageObject.driver.quit()
    console.log("AFTER ALL - Browser quit")
});