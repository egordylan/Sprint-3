class Base {

    // components

    get loginOrRegister() {
        return $('#customer_menu_top > li > a');
    }

    get menu() {
        return $$('.subnav> ul > *');
    }

    // actions

    async chooseMenuItem(cathegory) {
        (await (this.menu)).map(async (elem) => {
            const el = await elem.getText();
            if (el === '  ' + cathegory) {
                console.log("ELEMENT :::", el)
                await elem.click();
            }  
        });
    }

    async moveMenuItem(cathegory) {
        (await (this.menu)).map(async (elem) => {
            const el = await elem.getText();
            if (el === '  ' + cathegory) {
                console.log("SUB-ELEMENT :::", el)
                await elem.moveTo();
            } 
        });
    }
}

module.exports = { Base : new Base() }
