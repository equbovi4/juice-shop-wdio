const {Then} = require("@wdio/cucumber-framework");

Then('I am on login page', async function() {
    await this.loginPage.pageTitle.waitForDisplayed();
})

Then('I press {string}', async function(linkText) {
    const element = await this.loginPage.forgotPasswordLink(linkText);
    await element.jsClick();
    
    await this.forgotPassword.pageTitle.waitForDisplayed();
})

Then('I have logged in', async function() {
    await this.basePage.accountButton.waitAndClick();
    await this.basePage.loginButton.waitAndClick();
    await this.loginPage.pageTitle.waitForDisplayed();

    await this.loginPage.emailInputField.waitAndSetValue(this.user.email);
    await this.loginPage.passwordInputField.waitAndSetValue(this.user.password);
    await this.loginPage.loginButton.waitAndClick();

    await this.basePage.basketButton.waitForDisplayed();
})