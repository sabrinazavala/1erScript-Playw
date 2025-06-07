class HomePage {
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
                logout: this.page.locator('#logout2'),
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
    
    async clickOnLogoutLink() {
        await this.elements.topMenu.logout.click();
    }   
}
module.exports = HomePage;    
