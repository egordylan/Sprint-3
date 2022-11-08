class ShopingCart {
    // components

    get name() {
        return $('.align_left > a');
    }

    get quantity() {
        return $('#cart_quantity114');
    }

    get checkout() {
        return $('#cart_checkout1');
    }

    // actions

    async clickCheckout() {
        await (await this.checkout).click();
    }
}

module.exports = { ShopingCart : new ShopingCart()}
