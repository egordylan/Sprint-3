class Books {

    // components

    get main() {
        return $('.thumbnails.grid.row.list-inline');
    }

    get book1() {
        return $('a[title="Paper Towns by John Green"]');
    }

    get book2() {
        return $('a[title="The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life"]');
    }

    get book3() {
        return $('a[title="Allegiant by Veronica Roth"]');
    }

}

module.exports = { Books : new Books() }