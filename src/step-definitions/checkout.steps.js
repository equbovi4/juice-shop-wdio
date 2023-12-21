const {Then} = require("@wdio/cucumber-framework");

Then('I add {string} to basket and checkout', async function(productName) {
    await this.basePage.openSearchBar.waitAndClick();
    await this.basePage.searchInputField.waitAndSetValue(productName);
    await browser.keys('Enter');

    const productBasketButton = await this.searchPage.foundItemAddToBasketButton(productName);
    await productBasketButton.waitAndClick();

    const snackbarElement = await this.searchPage.snackBarItemAdded(productName);
    await snackbarElement.waitToAppearAndDisappear();

    await this.basePage.basketButton.waitAndClick();
    await this.basketPage.pageTitle.waitForDisplayed();
    const productInBasket = await this.basketPage.basketProduct(productName);
    await productInBasket.waitForDisplayed();

    await this.basketPage.checkoutButton.waitAndClick();
})

Then('I choose saved address', async function() {
    await this.checkoutPage.savedInfoRadioButton.waitAndClick();
    await this.checkoutPage.continueButton.waitAndClick();
})

Then('I choose {string}', async function(duration) {
    const radioButton = await this.checkoutPage.deliveryDuration(duration);
    await radioButton.waitAndClick();

    await this.checkoutPage.continueButton.waitAndClick();
})

Then('I choose saved card', async function() {
    await this.checkoutPage.savedInfoRadioButton.waitAndClick();
    await this.checkoutPage.continueButton.waitAndClick();
})

Then('I place order and pay', async function() {
    await this.checkoutPage.placeOrderAndPayButton.waitAndClick();
})

Then('I am in order completion page', async function() {
    await this.orderPage.pageTitle.waitForDisplayed();
})

Then('I see correct order address', async function() {
    for (const value of this.addressData.data) {
        const element = await this.orderPage.deliveryAddress(value);
        await element.waitForDisplayed();
    }
})

Then('I see order details', async function(dataTable) {
    let hashObject = dataTable.hashes();
    let keys = Object.keys(hashObject[0]);

    for (const key of keys) {
        for (const entry of hashObject) {
            const element = await this.orderPage[key.toLowerCase()](entry[key]);
            await element.waitForDisplayed();
        }
    }
})

Then('I see end total price', async function(dataTable) {
    let data = dataTable.raw()

    for (let index = 1; index <= data.length; index++) {
        let elements = await this.orderPage.categoryAndPriceFields(index);

        let category = await elements[0];
        let price = await elements[1];

        await category.waitForDisplayed();
        await price.waitForDisplayed();

        await expect(category).toHaveTextContaining(data[index - 1][0]);
        await expect(price).toHaveTextContaining(data[index - 1][1]);
    }
})