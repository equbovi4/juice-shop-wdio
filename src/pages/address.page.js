const BasePage = require("./common/base.page");

class AddressPage extends BasePage {
    
    //Elements
    get pageTitle() {
        return browser.$('//h1[contains(text(), "My saved addresses")]');
    }

    get addNewAddressButton() {
        return browser.$('button[aria-label="Add a new address"]');
    }

    get formTitle() {
        return browser.$('//h1[contains(text(), "Add New Address")]');
    }

    get countryInputField() {
        return browser.$('//input[@placeholder="Please provide a country."]');
    }

    get nameInputField() {
        return browser.$('//input[@placeholder="Please provide a name."]');
    }

    get mobilenumberInputField() {
        return browser.$('//input[@type="number"]');
    }

    get zipcodeInputField() {
        return browser.$('//input[@placeholder="Please provide a ZIP code."]');
    }

    get addressInputField() {
        return browser.$('//textarea[@id="address"]');
    }

    get cityInputField() {
        return browser.$('//input[@placeholder="Please provide a city."]');
    }

    get stateInputField() {
        return browser.$('//input[@placeholder="Please provide a state."]');
    }

    get submitButton() {
        return browser.$('//button[@type="submit"]');
    }

    // get formTitle() {
    //     return browser.$('button[aria-label="Add a new address"]');
    // }
}

module.exports = AddressPage;