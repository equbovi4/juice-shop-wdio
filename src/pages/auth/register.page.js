const BasePage = require("../common/base.page");

class RegisterPage extends BasePage{
    constructor() {
        super();
    }

    //Elements
    get pageTitle() {
        return browser.$('//h1[text()="User Registration"]');
    }

    get emailInputField() {
        return browser.$('//input[@id="emailControl"]');
    }
    
    get passwordInputField() {
        return browser.$('//input[@id="passwordControl"]');
    }
    
    get passwordInputRepeat() {
        return browser.$('//input[@id="repeatPasswordControl"]');
    }

    get selectionSecurityQuestion() {
        return browser.$('//mat-select[@name="securityQuestion"]');
    }

    get securityAnswerInputField() {
        return browser.$('//input[@id="securityAnswerControl"]');
    }

    get registerButton() {
        return browser.$('//button[@id="registerButton"]');
    }

    get confirmationMessage() {
        return browser.$('//span[contains(text(), "Registration completed successfully. You can now log in.")]');
    }

    //Methods
    async securityQeustionOption(option) {
        return browser.$(`//span[@class="mat-option-text"][contains(text(),"${option}")]`);
    }
}

module.exports = RegisterPage;