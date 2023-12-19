const {Then} = require("@wdio/cucumber-framework");

Then('I am on login page', async function() {
    await this.loginPage.pageTitle.waitForDisplayed();
})

Then('I press {string}', async function(linkText) {
    const element = await this.loginPage.forgotPasswordLink(linkText);
    await element.jsClick();
    
    await this.forgotPassword.pageTitle.waitForDisplayed();
})