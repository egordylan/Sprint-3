const { Base } = require('../pageobjects/base.po.js');
const { Login } = require('../pageobjects/login.po.js');


describe('Login negative', async function () {
    it(`should not log in`, async function () {
        await (await Base.loginOrRegister).click();

        await Login.login( {username: 'JohnyBravo', password: 'password1'} );
        expect (await browser.getTitle()).toBe('Account Login');

        
        const message = await Login.alertMessage;
        await expect(message).toBeDisplayed();
        await expect(message).toHaveTextContaining('Error: Incorrect login or password provided.');
    });
    
});

// npx wdio run wdio.conf.js --spec login_smoke_case_negative.js
