const {Then} = require("@wdio/cucumber-framework");

Then('I enter email in forgot email page', async function() {
    await this.forgotPassword.emailInputField.waitAndSetValue(this.user.email);
})

Then('I click on security question field', async function() {
    await this.forgotPassword.securityQuestionInputField.waitAndClick();
})

Then('I see security question', async function() {
    await this.forgotPassword.securityQuestionDiv.waitForDisplayed({ reverse: true });
})

Then('I enter security answer', async function() {
    await this.forgotPassword.securityQuestionInputField.waitAndSetValue(this.user.secAnswer);
})

Then('I enter new password and confirm', async function() {
    this.user.password = `new` + this.user.password;
    
    await this.forgotPassword.newPasswordInput.waitAndSetValue(this.user.password);
    await this.forgotPassword.confirmNewPasswordInput.waitAndSetValue(this.user.password);

    await this.forgotPassword.submitButton.waitAndClick();
})

Then('I see message about successfully changed password', async function() {
    await this.forgotPassword.confirmationMessage.waitForDisplayed();
})