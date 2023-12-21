class BasketPage {
    //Elements
    get pageTitle() {
        return browser.$('//h1[contains(text(), "Your Basket")]');
    }

    get checkoutButton() {
        return browser.$('//button[@id="checkoutButton"]');
    }

    //Methods
    async basketProduct(itemName) {
        return browser.$(`//mat-row/mat-cell[contains(text(), "${itemName}")]`);
    }
}

module.exports = BasketPage;