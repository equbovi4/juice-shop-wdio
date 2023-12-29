const APIBase = require('./api-base');

class User extends APIBase {
    constructor(url) {
        super();
        this.url = url;
    }
    
    async createUser(email, password, securityQuestion) {
        const body = {
            email: email,
            password: password,
            passwordRepeat: password,
            securityQuestion: securityQuestion,
            securityAnswer: 'pppppp'
        };

        const response = await super.post('/api/Users/', body);

        return response.data.data;
    }
}

module.exports = User;