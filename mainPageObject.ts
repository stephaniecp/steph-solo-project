import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'
const fs= require('fs')  //  (Built in from Node) Added for the screenshot/.txt tests per Unit 2.8 example https://github.com/MarohnHoward/qrpt9InClassExamples/blob/main/unit2.8/googleWBaseTest.test.ts

export class PageObject extends BasePage {
// Test suite 0: 
    byNavAircraftTabSmallScreen: By = By.xpath("//li[@id='menu-item-12739']")
    byNavAircraftTabBigScreen: By = By.xpath("//li[@id='menu-item-426']//a[contains(text(),'Aircraft')]")
    byCollapsedNavMenuIcon: By = By.xpath("//button[@class='banner__nav-toggle js-toggle-mobile-menu']//span[1]")
// Test suite 1: Nav Bar [Main] list items 
    //Nav Bar container
    byNavBarBanner: By = By.id("banner") // Verified path - $$('[id= "banner"]') 
    // Relative CSS Selector (5 links below)
    byAircraftNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
    byLearnNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
    byBuildNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)')
    bySupportNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)')
    byCommunityNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)')
    byStoreNavIdDesktop: By = By.id("menu-item-182")
    bySearchNavBar: By = By.xpath("//button[@aria-controls='primary_navigation-search-form']")
    byOrderAKitNavCta: By = By.css('[class= "banner__nav-primary-button"]')
    byCartBtnCss: By = By.css('.action.showcart')
    byVansLogoNavBar: By = By.xpath("//img[@src='https://www.vansaircraft.com/wp-content/themes/vans-aircraft/dist/images/logo-black.svg']")
// Test suite 1: Nav Bar [Aircraft] list items
    // Relative xPath selectors for the 9 li below
    byAirplaneRv15: By = By.xpath("//li[@id='menu-item-22589']//a[contains(text(),'RV-15')]")
    byAirplaneRv14: By = By.xpath("//li[@id='menu-item-12355']//a[contains(text(),'RV-14 / 14A')]")
    byAirplaneRv12is: By = By.xpath("//li[@id='menu-item-12356']//a[contains(text(),'RV-12iS')]")
    byAirplaneRv10: By = By.xpath("//li[@id='menu-item-12066']//a[contains(text(),'RV-10')]")
    byAirplaneRv9: By = By.xpath("//li[@id='menu-item-12357']//a[contains(text(),'RV-9 / 9A')]")
    byAirplaneRv8: By = By.xpath("//li[@id='menu-item-281']//a[contains(text(),'RV-8 / 8A')]")
    byAirplaneRv7: By = By.xpath("//li[@id='menu-item-12358']//a[contains(text(),'RV-7 / 7A')]")
    byAirplaneRv4: By = By.xpath("//li[@id='menu-item-12359']//a[contains(text(),'RV-4')]")
    byAirplaneRv3: By = By.xpath("//li[@id='menu-item-12360']//a[contains(text(),'RV-3')]")
// Test suite 1: Nav Bar [Learn] list items
    bylearnRvDesign: By = By.xpath("//li[@id='menu-item-168']//a[normalize-space()='RV Design']")
    byLearnFlyingAnRv: By = By.xpath("//li[@id='menu-item-167']//a[normalize-space()='Flying an RV']")
    byLearnSafety: By = By.xpath("//li[@id='menu-item-170']//a[normalize-space()='Safety']")
    byLearnWhichRvIsRight: By = By.xpath("//li[@id='menu-item-171']//a[normalize-space()='Which RV is Right for Me?']")
    byLearnRvFlightTraining: By = By.xpath("//li[@id='menu-item-169']//a[normalize-space()='RV Flight Training']")
    byLearnConstruction: By = By.xpath("//li[@id='menu-item-174']//a[normalize-space()='Construction Classes and Builder Assist']")
    byLearnDemo: By = By.xpath("//li[@id='menu-item-166']//a[normalize-space()='Demo an RV']")
    byLearnFaq: By = By.xpath("//li[@id='menu-item-13989']//a[normalize-space()='FAQ']")
// Test suite 1: Nav Bar [Build] list items
    byBuildBuildinganRv: By = By.xpath("//li[@id='menu-item-152']//a[normalize-space()='Building an RV']")
    byBuildStandardKits: By = By.xpath("//li[@id='menu-item-157']//a[normalize-space()='Standard Kits']")
    byBuildQuickbuild: By = By.xpath("//li[@id='menu-item-156']//a[normalize-space()='QuickBuild Kits']")
    byBuildPowerplants: By = By.xpath("//li[@id='menu-item-154']//a[normalize-space()='Powerplants']")
    byBuildPropellers: By = By.xpath("//li[@id='menu-item-155']//a[normalize-space()='Propellers']")
    byBuildTools: By = By.xpath("//li[@id='menu-item-12082']//a[normalize-space()='Tools']")
    byBuildStemPrograms: By = By.xpath("//li[@id='menu-item-12621']//a[normalize-space()='STEM Programs']")
// Test suite 1: Nav Bar [Support] list items
    bySupportBuilder: By = By.xpath("//li[@id='menu-item-176']//a[normalize-space()='Builder Support']")
    bySupportSafety: By = By.xpath("//li[@id='menu-item-180']//a[normalize-space()='Safety & Service Info']")
    bySupportSlsa: By = By.xpath("//li[@id='menu-item-181']//a[normalize-space()='SLSA Service Centers']")
    bySupportPlans: By = By.xpath("//li[@id='menu-item-179']//a")
    bySupportTech: By = By.xpath("//li[@id='menu-item-12710']//a[normalize-space()='Tech Q&A']")
    bySupportDownloads: By = By.xpath("//li[@id='menu-item-177']//a[normalize-space()='Downloads']")
// Test suite 1: Nav Bar [Communauty] list items
    byCommunautyStories: By = By.xpath("//li[@id='menu-item-12949']//a[normalize-space()='Stories']")
    byCommunautyBuilderGr: By = By.xpath("//li[@id='menu-item-159']//a[normalize-space()='Builder Groups']")
    byCommunautyFirstFlights: By = By.xpath("//li[@id='menu-item-580']//a[normalize-space()='First Flights']")
    byCommunautyNews: By = By.xpath("//li[@id='menu-item-162']//a[normalize-space()='News']")
    byCommunautyEvents: By = By.xpath("//li[@id='menu-item-11611']//a[normalize-space()='Events']")
    byCommunautyInternetR: By = By.css("li[id='menu-item-14255'] a")
// Test suite 2: Home page (non nav bar) selectors
    byHomeHeroImageSection:By = By.css('.flickity-viewport') //  Verified
    byHomeContainerRvCount:By = By.css('.module-home-blocks__rvs') //  Verified
    byHomeContainerRvCountCta:By = By.xpath('//a[text()= "First Flight Reports"]') //  Verified
    byHomeEmailSignUp:By = By.css('.module-home-blocks__newsletter') //  Verified
    byHomeEmailSignUpCta:By = By.xpath("//input[@value='Subscribe']") //  Verified
    byHomeContainerBuildingAnRv:By = By.xpath('/html[1]/body[1]/div[2]/main[1]/section[3]/div[1]/div[2]/div[2]') //  Verified
    byHomeContainerBuildingAnRvCta:By = By.xpath("//a[contains(@href,'https://www.vansaircraft.com/building-an-rv/')][normalize-space()='Learn More']") //  Verified
    byHomeContainerFunSafe:By = By.xpath("//div[contains(@class,'module-text-with-image__wrapper--right')]//div[contains(@class,'module-text-with-image__content-wrapper')]//div[contains(@class,'module-text-with-image__content')]") //  Verified
    byHomeContainerFunSafeCta:By = By.xpath("//a[contains(@href,'https://www.vansaircraft.com/safety/')][normalize-space()='Learn More']") //  Verified
    byHomeContainerGetOff:By = By.xpath("/html[1]/body[1]/div[2]/main[1]/section[5]/div[1]/div[2]/div[2]") //  Verified
    byHomeContainerGetOffCta:By = By.xpath("//a[contains(@href,'https://www.vansaircraft.com/builder-support/')][normalize-space()='Learn More']") //  Verified
    byHomeContainerVideoBanner:By = By.xpath("//div[@class='module-video-banner__background parallax']")
    byHomeContainerFooterNavigation:By = By.css('.content-info__first') //  Verified
// Test suite 4: Home page email sign up form
    byHomeEmailFormFirstName:By = By.xpath("//input[@placeholder='First name']")
    byHomeEmailFormLastName:By = By.xpath("//input[@placeholder='Last name']")
    byHomeEmailFormEmail:By = By.xpath("//input[@placeholder='Email address']")
// Test suite 5: testing
    byStoreGiftMenuItem:By = By.xpath("//a[normalize-space()='Gifts']") 
    byStoreGiftRvTrainingProjectLinkImg:By = By.xpath(`//img[@alt='CD KITLOG PRO']`) // EDITING TO FX BUG
    byStoreGiftItemAddToCartCta:By = By.xpath("//button[@id='product-addtocart-button']")
    byStoreNavCartCta: By = By.xpath("//a[@class='action showcart']")
    byStoreNavCartExpanded: By = By.xpath("//span[@class='counter-number']") // Only present when there is 1+ item in the cart

    constructor(){
        super({url:"https://www.vansaircraft.com/"})
    }

// Test Suite 0
    async findElementOnEitherScreenSizes() {
        console.log("what is get size? " + typeof(await (await this.driver.manage()).window()).getRect())
        let currentSize = await this.driver.manage().window().getRect() // Gets screen size (width and height)
        let currentScreenWidth = currentSize.width // TRYING TO Get only the width
        console.log(`width is yo!!!=${currentScreenWidth}`)
        if (currentScreenWidth <= 800) {
            await this.verifyElementExists(this.byNavAircraftTabSmallScreen) // 799px wide and below
        }
        else {
            await this.verifyElementExists(this.byNavAircraftTabBigScreen) // 800px wide and above
        }
    }
    async reziseWindowToTestChangingElements() {
        // Initialized on maximized screen size as per beforeAll statement in Test file
        await this.findElementOnEitherScreenSizes() // Tests on large screen
        console.log("0: Found element on maximized screen")
        let width = 700
        let height = 500
        await this.driver.manage().window().setRect({x: 0, y: 0, width: width, height: height})  // Reduses screen size to the value of width/height set above
        await this.click(this.byCollapsedNavMenuIcon) // Expands small screen menu to reveal the expected element
        await this.findElementOnEitherScreenSizes() // Tests on small screen
        console.log("0: Found element on small screen")
        await this.click(this.byVansLogoNavBar) // Returning to the home page
        await this.driver.manage().window().maximize() // Returns to full expanded screen size for the following tests
    }
    
// Test Suite 1
    async clickToAcessStore() {
        return await this.click(this.byStoreNavIdDesktop)
    }

    getAllMainNavLocators():By[] {
        return [
            this.byAircraftNavCss,
            this.byLearnNavCss,
            this.byBuildNavCss,
            this.bySupportNavCss,
            this.byCommunityNavCss,
            this.byStoreNavIdDesktop,
            this.bySearchNavBar,
            this.byOrderAKitNavCta
        ]
    }
    getAllAircraftNavLocators():By[] {
        return [
            this.byAirplaneRv15,
            this.byAirplaneRv14,
            this.byAirplaneRv12is,
            this.byAirplaneRv10,
            this.byAirplaneRv9,
            this.byAirplaneRv8,
            this.byAirplaneRv7,
            this.byAirplaneRv4,
            this.byAirplaneRv3
        ]
    }
    getAllLearnNavLocators():By[] {
        return [
            this.bylearnRvDesign,
            this.byLearnFlyingAnRv,
            this.byLearnSafety,
            this.byLearnWhichRvIsRight,
            this.byLearnRvFlightTraining,
            this.byLearnConstruction,
            this.byLearnDemo,
            this.byLearnFaq
        ]
    }
    getAllBuildNavLocators():By[] {
        return [
            this.byBuildBuildinganRv,
            this.byBuildStandardKits,
            this.byBuildQuickbuild,
            this.byBuildPowerplants,
            this.byBuildPropellers,
            this.byBuildTools,
            this.byBuildStemPrograms
        ]
    }
    getAllSupportNavLocators():By[] {
        return [
            this.bySupportBuilder,
            this.bySupportSafety,
            this.bySupportSlsa,
            this.bySupportPlans,
            this.bySupportTech,
            this.bySupportDownloads
        ]
    }
    getAllCommunityNavLocators():By[] {
        return [
            this.byCommunautyStories,
            this.byCommunautyBuilderGr,
            this.byCommunautyFirstFlights,
            this.byCommunautyNews,
            this.byCommunautyEvents,
            this.byCommunautyInternetR
        ]
    }

// Test Suite 2
    getAllHomePageLocators():By[] {
        return [
            this.byHomeHeroImageSection,
            this.byHomeContainerRvCount,
            this.byHomeContainerRvCountCta,
            this.byHomeEmailSignUp,
            this.byHomeEmailSignUpCta,
            this.byHomeContainerBuildingAnRv,
            this.byHomeContainerBuildingAnRvCta,
            this.byHomeContainerFunSafe,
            this.byHomeContainerFunSafeCta,
            this.byHomeContainerGetOff,
            this.byHomeContainerGetOffCta,
            this.byHomeContainerVideoBanner,
            this.byHomeContainerFooterNavigation
        ]
    }

// Test Suite 3
    searchIconCollapsed: By = By.xpath("//button[@aria-controls='primary_navigation-search-form']")
    searchFieldExpanded: By = By.xpath("//form[@id='primary_navigation-search-form']//input[@placeholder='Search ???']")
    results: By = By.xpath("//section[@class='post-single']//div[@class='container']")
    async search(searchTerm: string) {
        await this.click(this.searchIconCollapsed)
        return this.setInput(this.searchFieldExpanded, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
    async writeSearchLogFile(filePath: string): Promise<void> {
        console.log(`Date1=${Date.now()}`) // Temporary
        let text = await this.getResults()
        console.log(`Date2=${Date.now()}`) // Temporary
        await fs.writeFile(
            filePath, text, (e) => {
                if (e) console.error(e)
                else console.log('3: Search Logs Saved Successfully')
                console.log(`Date3=${Date.now()}`) // Temporary
            }
        )
        console.log(`Date4=${Date.now()}`) // Temporary
        await this.click(this.byVansLogoNavBar) // Returning to the home page
    }

    // Test Suite 5
    async addItemToCart() {
        this.navigate()
        await this.clickToAcessStore()
        console.log("5 - Step 1")
        await this.click(this.byStoreGiftMenuItem)
        jest.setTimeout(1000)
        console.log("5 - Step 2")
        await this.click(this.byStoreGiftRvTrainingProjectLinkImg)
        console.log("5 - Step 3")
        await this.click(this.byStoreGiftItemAddToCartCta)
        console.log("5 - Step 4")
        await this.verifyElementExists(this.byStoreNavCartExpanded)
        console.log(" 5: One or more item was found in the cart")
        await this.click(this.byVansLogoNavBar) // Returning to the home page
        console.log("5 - Step 5")
    }

// BONUS Test Suite
    async canHoverOverOrderKitCta() {
        const hoverAction = this.driver.actions()
        const ctaElement = await this.getElement(this.byOrderAKitNavCta)
        console.log(`Bonus: Hover = ${hoverAction} CTA = ${ctaElement}`)
        await this.actionWiggle(hoverAction, ctaElement, 100)
        await hoverAction.perform() // Actions don't actually happen until perform is called
    }

} // End of export

