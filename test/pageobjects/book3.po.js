class Book3 {
    // components

    get main() {
        return $('#maincontainer');
    }

    get quantity() {
        return $('input[name="quantity"]');
    }

    get addCartSelector() {
        return $('li > .cart');
    }

    // actions
    async setQuantity(value) {
        await (await this.quantity).clearValue();
        await (await this.quantity).setValue(value);
    }

    async addCart() {
        await (await this.addCartSelector).click();
    }
}

module.exports = { Book3 : new Book3()}