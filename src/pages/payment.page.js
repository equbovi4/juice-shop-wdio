const BasePage = require('./common/base.page');

class PaymentPage extends BasePage {

    //Elements
    get pageTitle() {
        return browser.$('//h1[contains(text(), "My Payment Options")]');
    }

    get cardsTable() {
        return browser.$('//mat-table[contains(@class, "mat-table")]');
    }

    get addNewCardButton() {
        return browser.$('//mat-panel-title[contains(text(), "Add new card")]');
    }

    get cardNameInputField() {
        return browser.$('[id="mat-input-3"]');
    }

    get cardNumberInputField() {
        return browser.$('[id="mat-input-4"]');
    }

    get cardExpiryMonthInputField() {
        return browser.$('[id="mat-input-5"]');
    }

    get cardExpiryYearInputField() {
        return browser.$('[id="mat-input-6"]');
    }

    get submitButton() {
        return browser.$('//span[contains(text(), "Submit")]');
    }

    //Methods
    async confirmationMessage(lastFourDigits) {
        return browser.$(`//span[@class ="mat-simple-snack-bar-content"][contains(text(), 'Your card ending with ${lastFourDigits} has been saved for your convenience.')]`);
    }

    async cardHolderName(holderName) {
        return browser.$(`//mat-cell[contains(@class, "mat-column-Name")][contains(text(), '${holderName}')]`);
    }

    async cardExpiryDate(expireDates) {
        return browser.$(`//mat-cell[contains(@class, "mat-column-Expiry")][contains(text(), '${expireDates}')]`);
    }
}

module.exports = PaymentPage;