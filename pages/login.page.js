export class LoginPage {
  constructor(page) {
    this.page = page;
  } 
  
  // ELEMENTS:
  get elements() {
    return {
      textBoxes:{
        username: this.page.locator('#loginusername'),
        password: this.page.locator('#loginpassword'), 
      },
      buttons: {
        login: this.page.locator('#logInModal button.btn.btn-primary'),
        close: this.page.locator('#logInModal .btn-secondary'),
      }
    }
  }
  // METHODS:
  async InsertUsername(username) {
    await this.elements.textBoxes.username.fill(username);
  }
  async InsertPassword(password) {
    await this.elements.textBoxes.password.fill(password);
  }
  async clickOnLoginButton() {
    await this.elements.buttons.login.click();
  } 
}