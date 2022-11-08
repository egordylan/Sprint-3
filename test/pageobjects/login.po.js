class Login {
    // components
    get username() {
        return $('#loginFrm_loginname');
    }

    get password() {
        return $('#loginFrm_password');
    }

    get submitButton() {
        return $('button[title="Login"]');
    }

    get alertMessage() {
        return $('.alert.alert-error.alert-danger');
    }

    get accountName() {
        return $('.subtext');
    }

    // actions

    async login(credentials) {
        await (await this.username).setValue(credentials.username);
        await (await this.password).setValue(credentials.password);
        await (await this.submitButton).click();
    }

}

module.exports = { Login : new Login() }
