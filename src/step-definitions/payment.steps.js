const {Then} = require("@wdio/cucumber-framework");

Then('I have added a payment card', async function(dataTable) {
    await this.basePage.accountButton.waitAndClick();
    await this.basePage.userOrdersAndPaymentsButton.waitAndClick();
    await this.basePage.paymentOptionsButton.waitAndClick();
    await this.paymentPage.pageTitle.waitForDisplayed();

    await this.paymentPage.addNewCardButton.waitAndClick();

    let rows = dataTable.rows();
    for (const row of rows) {
        await this.paymentPage.cardNameInputField.waitAndSetValue(row[0]);
        this.paymentData.cardHolderName = row[0];

        await this.paymentPage.cardNumberInputField.waitAndSetValue(row[1]);
        this.paymentData.cardNumber = row[1];

        await this.paymentPage.cardExpiryMonthInputField.waitAndSelecValue(row[2]);
        this.paymentData.expiryMonth = row[2];

        await this.paymentPage.cardExpiryYearInputField.waitAndSelecValue(row[3]);
        this.paymentData.expiryYear = row[3];

        await this.paymentPage.submitButton.waitAndClick();
        await this.paymentPage.cardsTable.waitForDisplayed();
    }
})