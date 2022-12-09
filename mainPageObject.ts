

import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class PageObject extends BasePage {
//Nav  Bar container
    byNavBarBanner: By = By.id("banner") // Verified path - $$('[id= "banner"]') 
// Nav Bar list items // Verified path - $$('[id= "banner"]') 
    // relative CSS Selector
    byAircraftNavBrnCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
    
    byCommunityNavCss: By = By.css('body > div:nth-child(13) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)')

    byStoreNavIdDesktop: By = By.id("menu-item-182")
    // byStoreNavCss: By = By.css('li[id='menu-item-182'] a')
    // byStoreNavXpath: By = By.xpath('//li[@id='menu-item-182']//a[normalize-space()='Store']')

    bySearchNavBar: By = By.xpath('[//li/button[@class="menu-toggle-search"]') // Verified path - '[//li/button[@class="menu-toggle-search"]'
    byOrderAKitNavCta: By = By.css('[class= "banner__nav-primary-button"]') // Verified path - $$('[class= "banner__nav-primary-button"]')    
    
    // NOT WORKING relative CSS Selector
    byCartBtnCss: By = By.css('.action.showcart')

    // NOT WORKING relative xPath
    // bycartIconUrlxPath: By = By.xpath('//a[@class='action showcart active']')

    constructor(){
        super({url:"https://www.vansaircraft.com/"})
    }

    async clickToAcessStore() {
        return await this.click(this.byStoreNavIdDesktop)
    }
    
}

