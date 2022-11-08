const { Base } = require('../pageobjects/base.po.js');
const { Login } = require('../pageobjects/login.po.js');


describe('Login positive', async function () {
    it(`should log in`, async function () {
        await (await Base.loginOrRegister).click();

        await Login.login( {username: 'JohnyBravo', password: 'password123'} );
        expect (await browser.getTitle()).toBe('My Account');

        const name = await(await Login.accountName).getText();
        console.log(name)
        await expect(name).toEqual('Johny');

    });
    
});

// npx wdio run wdio.conf.js --spec login_smoke_case.js
