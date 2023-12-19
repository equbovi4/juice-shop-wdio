const {Then} = require("@wdio/cucumber-framework");

Then('I open landing page', async function() {
    await browser.url('');
    await this.basePage.snackBarLanguageChange.waitForDisplayed({reverse: true});
    await this.basePage.buttonDismissCookies.waitAndClick();
    await this.basePage.buttonCloseWelcomeBanner.waitAndClick();
})

Then('I open register page', async function() {
    await browser.url('/register#/register');
    await this.basePage.snackBarLanguageChange.waitForDisplayed({reverse: true});
    await this.basePage.buttonCloseWelcomeBanner.waitAndClick();
    await this.registerPage.pageTitle.waitForDisplayed();
})