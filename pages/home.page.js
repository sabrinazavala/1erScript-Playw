export class HomePage {
    constructor(page) {
        this.page = page;

        
    }


    // ELEMENTS:
    get elements() {
        return {
            topMenu:{
                home: this.page.locator('[href="index.html"]'),                
                login: this.page.locator('#login2'),
                signup: this.page.locator('#signin2'),
                welcome: this.page.locator('#nameofuser'),
            }
        };
    }

    // METHODS:
    async goTo() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async clickOnLoginLink() {
        await this.elements.topMenu.login.click();
    }   
}
    
