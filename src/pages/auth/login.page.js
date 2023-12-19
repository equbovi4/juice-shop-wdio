const BasePage = require("../common/base.page");

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    //Elements
    get pageTitle() {
        return browser.$('//h1[text()="Login"]');
    }

    get emailInputField() {
        return browser.$('//input[@id="email"]');
    }

    get passwordInputField() {
        return browser.$('//input[@id="password"]');
    }

    get loginButton() {
        return browser.$('//button[@id="loginButton"]');
    }

    //Methods
    async forgotPasswordLink(linkText) {
        return browser.$(`//a[@href="#/${linkText}"]`);
    }
}

module.exports = LoginPage;