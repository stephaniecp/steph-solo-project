import {By, WebElement, until, Origin, Button} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class storePageObject  extends BasePage {
    // Nav Bar list items
    byStoreNavBtnId: By = By.id("menu-item-182") // Verified path - $$('[id= "menu-item-182"]') 

    constructor(){
        super({url:"https://store.vansaircraft.com/"})
    }

    async clickToAcessStore() {
        return await this.click(this.byStoreNavBtnId)
    }

}

