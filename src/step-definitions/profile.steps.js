const {Then} = require("@wdio/cucumber-framework");

Then('I open profile page', async function() {
    await this.basePage.accountButton.waitAndClick();
    await this.basePage.userProfileButton.waitAndClick();
    await this.profilePage.pageTitle.waitForDisplayed();
})

Then('I upload a profile image', async function() {
    await this.profilePage.uploadFile('../support/data/images/wdio.png');
    await this.profilePage.uploadPictureButton.waitAndClick();
})

Then('I see new profile image', async function() {
    const element = await this.profilePage.profilePicture;

    await expect(await browser.checkElement(element)).toEqual(0);
})