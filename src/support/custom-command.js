class CustomCommand {
    constructor () {
        browser.addCommand("waitAndClick", async function() {
            await this.waitForDisplayed();
            await this.click();
        },
        true);

        browser.addCommand("scrollAndClick", async function() {
            await this.waitForDisplayed();
            await this.scrollIntoView({ block: 'center', inline: 'center' });
            await this.click();
        },
        true);

        browser.addCommand("waitAndSetValue", async function(value) {
            await this.waitForDisplayed();
            await this.setValue(value);
        },
        true);

        browser.addCommand("waitToAppearAndDisappear", async function() {
            await this.waitForDisplayed();
            await this.waitForDisplayed({reverse: true});
        },
        true);

        browser.addCommand("waitAndSelectOption", async function(option) {
            await this.waitForDisplayed();
            await this.selectByAttribute('value', option);
        },
        true);

        browser.addCommand("jsClick", async function() {
            await browser.executeAsync(function(element, done) {
                element.click(),
                done();
            }, this);
        },
        true);
    }
}

module.exports = CustomCommand;