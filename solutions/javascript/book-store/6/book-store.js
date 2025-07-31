const BOOK_PRICE = 800;
const DISCOUNTS = {
    2: 0.05,
    3: 0.1,
    4: 0.20,
    5: 0.25
}

const sortBooks = books => {
    let sortedBooks = {};
    let setNumber = 1;
    let addedToSet;
    let currentBook;
    let i;

    for (i = 0; i < books.length; i++) {
        addedToSet = false;
        currentBook = books[i];

        for (const set in sortedBooks) {
            if (addedToSet) {
                continue;
            }
            if (sortedBooks[set].indexOf(currentBook) === -1) {
                sortedBooks[set].push(currentBook);
                addedToSet = true;
            }
        }

        if (!addedToSet) {
            sortedBooks[`bookSet${setNumber}`] = [];
            sortedBooks[`bookSet${setNumber}`].push(currentBook);
            setNumber++;
        }
    }

    let bookSets = Object.keys(sortedBooks);
    let currentBookSet;
    let placeBookInDifferentSet;
    for (i = 0; i < bookSets.length; i++) {
        currentBookSet = bookSets[i];
        placeBookInDifferentSet = false;
        if (sortedBooks[currentBookSet].length === 5) {
            for (let j = 0; j < bookSets.length; j++) {
                if (placeBookInDifferentSet) {
                    continue;
                }
                if (sortedBooks[bookSets[j]].length === 3) {
                    placeBookInDifferentSet = true;
                    let bookToRemove = sortedBooks[currentBookSet].pop();
                    sortedBooks[bookSets[j]].push(bookToRemove);
                }
            }
        }
    }

    return sortedBooks;
}

export const cost = books => {
    if (!books || books.length === 0) {
        return 0;
    }

    const sortedBooks = sortBooks(books);
    let totalCost = 0;

    for (const bookSet in sortedBooks) {
        const numBooks = sortedBooks[bookSet].length;
        const discountRate = 1 - (numBooks > 1 ? DISCOUNTS[numBooks] : 0);
        totalCost += (numBooks * BOOK_PRICE) * discountRate;
    }

    return totalCost;
}