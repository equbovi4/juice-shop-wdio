class BasePage {

    //Elements
    get buttonCloseWelcomeBanner() {
        return browser.$('[aria-label="Close Welcome Banner"]');
    }

    get buttonDismissCookies() {
        return browser.$('//a[@aria-label="dismiss cookie message"]');
    }

    get snackBarLanguageChange() {
        return browser.$('.mat-simple-snack-bar-content');
    }
}

module.exports = BasePage;