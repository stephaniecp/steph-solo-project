

import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class PageObject extends BasePage {

    byStoreBtnId: By = By.id("menu-item-182") // Verified path - $$('[id= "menu-item-182"]') 
   
    // NOT WORKING - Need to fix
    byCartBtnUrl: By = By.css('[class= "showcart"]') // Verified path - $$('[class= "showcart"]')

    constructor(){
        super({url:"https://www.vansaircraft.com/"})
    }

    async clickToAcessStore() {
        return await this.click(this.byStoreBtnId)
    }

}

