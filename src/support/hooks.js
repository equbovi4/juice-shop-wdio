const {Before} = require('@wdio/cucumber-framework');
const {getHeadless} = require('../../config/arg.helper');

Before(async (scenario) => {
    await browser.reloadSession();
    await browser.maximizeWindow();

    const headless = getHeadless();
    if (headless) await browser.setWindowSize(1920, 1080);
})