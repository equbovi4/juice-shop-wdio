class CheckoutPage {
    //Elements
    get savedInfoRadioButton() {
        return browser.$('//mat-radio-button');
    }

    get continueButton() {
        return browser.$('//button/span[@class="mat-button-wrapper"]/span[contains(text(), "Continue")]');
    }

    get placeOrderAndPayButton() {
        return browser.$('//button[@id="checkoutButton"]');
    }

    async deliveryDuration(duration) {
        return browser.$(`//mat-cell[contains(text(), "${duration}")]/preceding-sibling::mat-cell[1]/mat-radio-button`);
    }
}

module.exports = CheckoutPage;