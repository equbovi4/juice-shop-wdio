class OrderPage {
    //Elements
    get pageTitle() {
        return browser.$('//div[@class="heading"]/span[contains(text(), "Order Summary")]');
    }

    //Methods
    async product(productName) {
        return browser.$(`//mat-cell[contains(text(), "${productName}")]`);
    }

    async price(productPrice) {
        return browser.$(`//mat-cell[contains(text(), "${productPrice}")][1]`);
    }

    async quantity(productQuantity) {
        return browser.$(`//mat-cell/span[contains(text(), "${productQuantity}")]`); 
    }

    async total(totalPrice) {
        return browser.$(`//mat-cell[contains(text(), "${totalPrice}")][2]`);
    }

    async deliveryAddress(value) {
        return browser.$(`//mat-card//*[contains(text(), "${value}")]`);
    }

    async categoryAndPriceFields(index) {
        return browser.$$(`//tr[@class="mat-row"][${index}]/td`);
    }
    //mat-header-cell[contains(text(), 'Product')]/ancestor::mat-header-row/following-sibling::mat-row//mat-cell[contains(text(), 'Apple Juice')]
    //mat-footer-cell/table/tr/td[contains(text(), "Delivery")]/ancestor::mat-footer-row/mat-footer-cell[4]/table/tr/td
}

module.exports = OrderPage;