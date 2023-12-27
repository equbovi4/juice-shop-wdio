const {Then} = require("@wdio/cucumber-framework");
const User = require('../support/api-helpers/user');
const SecurityQuestion = require('../support/api-helpers/security-question');

Then('I register a new account', async function() {
    this.user.email = this.user.randomEmail;

    await this.registerPage.emailInputField.waitAndSetValue(this.user.email);
    await this.registerPage.passwordInputField.waitAndSetValue(this.user.password);
    await this.registerPage.passwordInputRepeat.waitAndSetValue(this.user.password);
    await this.registerPage.selectionSecurityQuestion.waitAndClick();

    let element = await this.registerPage.securityQeustionOption(this.user.secQuestion);
    await element.waitAndClick();

    await this.registerPage.securityAnswerInputField.waitAndSetValue(this.user.secAnswer);
    await this.registerPage.registerButton.waitAndClick();
    await this.registerPage.confirmationMessage.waitToAppearAndDisappear();
})

Then('I have registered a new user using API', async function() {
    const baseUrl = "http://142.93.235.176:3000";

    const secQuestionApi = new SecurityQuestion(baseUrl);
    const userApi = new User(baseUrl);

    const securityQuestion = await secQuestionApi.getSecurityQuestionMotherMaiden();
    const newEmail = this.user.randomEmail;
    const newPassword = this.user.newPassword;

    await userApi.createUser(newEmail, newPassword, securityQuestion);
    this.user.email = newEmail;
    this.user.password = newPassword;
})