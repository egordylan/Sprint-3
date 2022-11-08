const { Search } = require('../pageobjects/search.po.js');
const cathegory = 'Fragrance';
const searchValue = 'toilette';
const testArray = ['POUR HOMME EAU DE TOILETTE', 'OMNIA EAU DE TOILETTE 65ML', 'ARMANI EAU DE TOILETTE SPRAY', 
                'EUPHORIA MEN INTENSE EAU DE TOILETTE SPRAY', 'MAN EAU DE TOILETTE SPRAY',];



describe('Search in certain category', async function () {
    it(`should find items`, async function () {
        await Search.searchInCathegory(cathegory, searchValue);
        const array = await Search.getSearchArray();
        console.log('ARRAY -----> ', array);
        await expect(array).toEqual(testArray);
    });
});

// npx wdio run wdio.conf.js --spec search_in_certain_category_smoke_case.js
