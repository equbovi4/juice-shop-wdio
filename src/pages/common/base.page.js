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

    get accountButton() {
        return browser.$('//button[@id="navbarAccount"]');
    }

    get loginButton() {
        return browser.$('//button[@id="navbarLoginButton"]');
    }

    get userProfileButton() {
        return browser.$('button[aria-label="Go to user profile"]');
    }

    get basketButton() {
        return browser.$('[routerlink="/basket"]');
    }

    get userOrdersAndPaymentsButton() {
        return browser.$('button[aria-label="Show Orders and Payment Menu"]') ;
    }

    get paymentOptionsButton() {
        return browser.$('button[aria-label="Go to saved payment methods page"]'); 
    }

    get savedAddressButton() {
        return browser.$('button[aria-label="Go to saved address page"]');
    }
}

module.exports = BasePage;