const APIBase = require('./api-base');

class SecurityQuestion extends APIBase {
    constructor(url) {
        super();
        this.url = url;
    }

    async getSecurityQuestions() {
        const response = await super.get('/api/SecurityQuestions/');
        return response.data.data;
    }

    async getSecurityQuestionMotherMaiden() {
        const securityQuestions = await this.getSecurityQuestions();
        return securityQuestions[1];
    }
}

module.exports = SecurityQuestion;