class User {
    constructor(emailArg, passwordArg, securityQuestionArg, securityAnswerArg ) {
        this.email = emailArg;
        this.password = passwordArg;
        this.secQuestion = securityQuestionArg,
        this.secAnswer = securityAnswerArg
    }

    get randomEmail() {
        const curTime = new Date().valueOf();
        return `ximik${curTime}@gmail.com`;
    }
}

module.exports = User;