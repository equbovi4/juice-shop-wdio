const {Then} = require("@wdio/cucumber-framework");

Then('I have saved address information', async function(dataTable) {
    await this.basePage.accountButton.waitAndClick();
    await this.basePage.userOrdersAndPaymentsButton.waitAndClick();
    await this.basePage.savedAddressButton.waitAndClick();
    await this.addressPage.pageTitle.waitForDisplayed();

    await this.addressPage.addNewAddressButton.waitAndClick();
    await this.addressPage.formTitle.waitForDisplayed();

    let data = dataTable.raw();

    for (const row of data) {
        const propertyName = row[0].split(' ').join('').toLowerCase();
        const propertyValue = row[1];
        
        await this.addressPage[propertyName + 'InputField'].waitAndSetValue(propertyValue);
        this.addressData.propertyName = propertyValue;
    }

    await this.addressPage.submitButton.waitAndClick();
})