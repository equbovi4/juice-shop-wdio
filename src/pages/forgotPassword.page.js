const BasePage = require('./common/base.page');

class ForgotPassword extends BasePage {
    constructor() {
        super();
    }

    //Elements
    get pageTitle() {
        return browser.$('//h1[contains(text(), "Forgot Password")]'); 
    }

    get emailInputField() {
        return browser.$('//input[@id="email"]');
    }

    get securityQuestionDiv() {
        return browser.$('//div[@id="forgot-form"]/mat-form-field[1][contains(@class, "mat-form-field-hide-placeholder")]');
    }

    get securityQuestionInputField() {
        return browser.$('//input[@id="securityAnswer" and @placeholder="Your eldest siblings middle name?"]');
    }

    get newPasswordInput() {
        return browser.$('//input[@id="newPassword"]');
    }

    get confirmNewPasswordInput() {
        return browser.$('//input[@id="newPasswordRepeat"]');
    }

    get submitButton() {
        return browser.$('//button[@id="resetButton"]');
    }

    get confirmationMessage() {
        return browser.$(`//div[contains(text(), "Your password was successfully changed.")]`);
    }
}

module.exports = ForgotPassword;