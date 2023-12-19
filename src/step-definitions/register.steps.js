const {Then} = require("@wdio/cucumber-framework");
const User = require('../support/api-helpers/user');

Then('I register a new account', async function() {
    this.user.email = this.user.randomEmail;

    console.log(this.user.email);
    await this.registerPage.emailInputField.waitAndSetValue(this.user.email);
    await this.registerPage.passwordInputField.waitAndSetValue(this.user.password);
    await this.registerPage.passwordInputRepeat.waitAndSetValue(this.user.password);
    await this.registerPage.selectionSecurityQuestion.waitAndClick();

    let element = await this.registerPage.securityQeustionOption(this.user.secQuestion);
    await element.waitAndClick();

    await this.registerPage.securityAnswerInputField.waitAndSetValue(this.user.secAnswer);
    await this.registerPage.registerButton.waitAndClick();
})