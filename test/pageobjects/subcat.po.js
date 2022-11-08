class SubCat {
    // components
    get paperback() {
        return $('a[href="https://automationteststore.com/index.php?rt=product/category&path=65_67"]');
    }

    get audioCd() {
        return $('a[href="https://automationteststore.com/index.php?rt=product/category&path=65_66"]');
    }

    get conditioner() {
        return $('a[href="https://automationteststore.com/index.php?rt=product/category&path=52_54"]');
    }

    get champoo() {
        return $('a[href="https://automationteststore.com/index.php?rt=product/category&path=52_53"]');
    }
}

module.exports = { SubCat : new SubCat()};
