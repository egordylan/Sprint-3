class Checkout {
    // components

    get checkoutButton() {
        return $('#checkout_btn');
    }

    // get quantity() {
    //     return $('input[name="quantity"]');
    // }

    // get addCartSelector() {
    //     return $('li > .cart');
    // }

    // actions
    async scrollClickCheckoutButton() {
        await (await this.checkoutButton).scrollIntoView();
        await (await this.checkoutButton).click();
        await browser.waitUntil(async function() {
            return (await browser.getTitle()) === 'Your Order Has Been Processed!'}, 
            {timeout: 5000, 
            timeoutMsg:'expected text to be different after 5s'});
    }

}

module.exports = { Checkout : new Checkout()}
