const { Base } = require('../pageobjects/base.po.js');
const { Login } = require('../pageobjects/login.po.js');
const { SubCat } = require('../pageobjects/subcat.po.js');
const { Books } = require('../pageobjects/books.po.js');
const { Book3 } = require('../pageobjects/book3.po.js');
const { ShopingCart } = require('../pageobjects/shopingcart.po.js');
const { Checkout } = require('../pageobjects/checkout.po.js');
const userLogin = 'JohnyBravo';
const userPassword = 'password123';
const homeMenuItem = 'HOME';
const cathegory = 'BOOKS';
const quantity = '1';
const itemNameForCheck = 'Allegiant by Veronica Roth';


describe('Shoping card flow behalf of login user', async function () {
    before('Login', async function () {
        await (await Base.loginOrRegister).click();
        await Login.login( {username: userLogin, password: userPassword} );

        await Base.chooseMenuItem(homeMenuItem);
    });

    context('adding goods: ', async function () {
        it(`choose a cathegory of goods`, async function () {
            await Base.moveMenuItem(cathegory);
            await (await SubCat.paperback).click();            
            
            await (await Books.main).scrollIntoView();
            await (await Books.book3).click();

            await Book3.setQuantity(quantity);
            await Book3.addCart();
            expect (await browser.getTitle()).toBe('Shopping Cart'); 
        });

        it(`check the cart and checkout`, async function () {
            await expect(await ShopingCart.name).toHaveText(itemNameForCheck);

            const itemQuantity = await (await ShopingCart.quantity).getValue();
            await expect(itemQuantity).toEqual(quantity);

            await ShopingCart.clickCheckout();
        });

        it(`check confirmation and confirm order`, async function () {
            expect (await browser.getTitle()).toBe('Checkout Confirmation');

            await Checkout.scrollClickCheckoutButton();

            expect(await browser.getTitle()).toBe('Your Order Has Been Processed!')
        });
    });

});

// npx wdio run wdio.conf.js --spec shopping_card_flow_behalf_of_login_user.js
