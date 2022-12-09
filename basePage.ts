// Imported from class notes / qaHomeworkWiki / 2.8
// See Mars's example from 11/23 class: https://github.com/MarohnHoward/group-number-projectpt9/blob/main/basePage.ts

import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
const chromedriver = require("chromedriver")

interface Options {
    driver?: WebDriver;
    url?: string; 
}

export class BasePage {
    driver: WebDriver;
    url: string;

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver;
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed in."
        )
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element;
    }
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click();
    }
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }

    // Should be exported to personal basePage - add mouse icon to view what it's doing while running tests
    /**
    * Some debug code inspired by:
    * https://stackoverflow.com/a/52669454
    */
     async showMouseMovement() {
        const jsCode = `
        function enableCursor() {
            var seleniumFollowerImg = document.createElement('img');
            seleniumFollowerImg.setAttribute('src', 'data:image/png;base64,'
            + 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAQAAACGG/bgAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAA'
            + 'HsYAAB7GAZEt8iwAAAAHdElNRQfgAwgMIwdxU/i7AAABZklEQVQ4y43TsU4UURSH8W+XmYwkS2I0'
            + '9CRKpKGhsvIJjG9giQmliHFZlkUIGnEF7KTiCagpsYHWhoTQaiUUxLixYZb5KAAZZhbunu7O/PKf'
            + 'e+fcA+/pqwb4DuximEqXhT4iI8dMpBWEsWsuGYdpZFttiLSSgTvhZ1W/SvfO1CvYdV1kPghV68a3'
            + '0zzUWZH5pBqEui7dnqlFmLoq0gxC1XfGZdoLal2kea8ahLoqKXNAJQBT2yJzwUTVt0bS6ANqy1ga'
            + 'VCEq/oVTtjji4hQVhhnlYBH4WIJV9vlkXLm+10R8oJb79Jl1j9UdazJRGpkrmNkSF9SOz2T71s7M'
            + 'SIfD2lmmfjGSRz3hK8l4w1P+bah/HJLN0sys2JSMZQB+jKo6KSc8vLlLn5ikzF4268Wg2+pPOWW6'
            + 'ONcpr3PrXy9VfS473M/D7H+TLmrqsXtOGctvxvMv2oVNP+Av0uHbzbxyJaywyUjx8TlnPY2YxqkD'
            + 'dAAAAABJRU5ErkJggg==');
            seleniumFollowerImg.setAttribute('id', 'selenium_mouse_follower');
            seleniumFollowerImg.setAttribute('style', 'position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0');
            document.body.appendChild(seleniumFollowerImg);
            document.onmousemove = function (e) {
            document.getElementById('selenium_mouse_follower').style.left = e.pageX + 'px';
            document.getElementById('selenium_mouse_follower').style.top = e.pageY + 'px';
            };
        };
        enableCursor();        
        `
        await this.driver.executeScript(jsCode);
    }

    async getElements(elementBy: By): Promise<WebElement[]> {
        await this.driver.wait(until.elementsLocated(elementBy));
        let elements = await this.driver.findElements(elementBy);
        return elements;
    } 

    // /**
    //  * Convenience method for drag and drop from the Actions API https://www.selenium.dev/documentation/webdriver/actions_api/
    //  * @param fromElement - element to start the drag from
    //  * @param toElement - element to drag to
    //  * @returns 
    //  */
    //  async doDragAndDrop(fromElement: WebElement, toElement: WebElement): Promise<void> {
    //     //required importing "Actions" 
    //     // return this.driver.actions().dragAndDrop(fromElement, toElement).perform()
    //     console.log(`doDragAndDrop: starting`)
    //     const actionPause = 500
    //     const actionPromise = this.driver
    //             .actions()
    //             .move({origin: fromElement, duration: 500}) //x:20, y:20, 
    //             .pause(actionPause)
    //             .press(Button.LEFT)
    //             .move({origin: Origin.POINTER, x:5, y:5}) // test
    //             .pause(actionPause)
    //             .move({origin: toElement, duration: 2000})
    //             .pause(actionPause)
    //             .move({origin: Origin.POINTER, x:5, y:5}) // test
    //             .release(Button.LEFT)
    //             .pause(actionPause)
    //             .perform();
    //     console.log(`doDragAndDrop: Action promise constructed`)
    //     return actionPromise
    // }

}