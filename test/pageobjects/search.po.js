class Search {

    // components
    get searchBar () {
        return $('#filter_keyword.pull-left.input-medium.search-query.dropdown-toggle');
    }

    get goSearchButton () {
        return $('.button-in-search');
    }

    get searchCathegory () {
        return $$('.search-category');
    }

    get searchResultArray () {
        return $$('.fixed_wrapper');
    }

    
    // actions
    async searchInCathegory (cathegory, value) {
        await (await this.searchBar).click();
        (await (this.searchCathegory)).map(async (elem) => {
            const el = await elem.getText();
            if (el === cathegory) {
                console.log("EL EL El ::: ", el)
                await elem.click();
            }  
        });

        await (await this.searchBar).setValue(value);
        await (await this.goSearchButton).click();
        await (await $('.thumbnails.grid.row.list-inline')).scrollIntoView();
    }

    async getSearchArray () {
        // variant 1
        const result = await Promise.all((await (this.searchResultArray)).map(async (elem) => {
            const el = await elem.getText();
            console.log('I AM THE ELEM ---- ', el);
            return el;
        }));
        console.log('RESULT ::: ', result);

        return result;

        //variant 2
        /* 
        const resultArray = await this.searchResultArray;
        const array = [];
            
        for (let elem of resultArray) {
            array.push(await elem.getText());
        }

        console.log('Our array: ---> ', array);
        return array;
        */
    }

}

module.exports = {Search : new Search()};
