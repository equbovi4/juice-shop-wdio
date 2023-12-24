const BasePage = require('./common/base.page');
const path = require('path');

class ProfilePage extends BasePage {
    //Elements
    get pageTitle() {
        return browser.$('//h1[contains(text(), "User Profile")]');
    }

    get attachment() {
        return browser.$('//input[@type="file"]');
    }

    get uploadPictureButton() {
        return browser.$('button[aria-label="Button to upload the profile picture"]');
    }

    get profilePicture() {
        return browser.$('.img-rounded');
    }

    //Methods
    async uploadFile(pathToFile) {
        const filePath = path.join(__dirname, pathToFile);

        await this.attachment.waitAndSetValue(filePath);
    }
}

module.exports = ProfilePage;