const BasePage = require("../common/base.page");

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    //Elements
    get pageTitle() {
        return browser.$('//h1[text()="Login"]');
    }

    //Methods
    async forgotPasswordLink(linkText) {
        return browser.$(`//a[@href="#/${linkText}"]`);
    }
}

module.exports = LoginPage;