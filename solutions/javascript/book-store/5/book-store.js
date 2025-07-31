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
        if (i === 0) {
            sortedBooks[`bookSet${setNumber}`] = [];
            sortedBooks[`bookSet${setNumber}`].push(currentBook);
            setNumber++;
            continue;
        }

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
    let swappedBooks;
    for (i = 0; i < bookSets.length; i++) {
        currentBookSet = bookSets[i];
        swappedBooks = false;
        if (sortedBooks[currentBookSet].length === 5) {
            for (let j = 0; j < bookSets.length; j++) {
                if (swappedBooks) {
                    continue;
                }
                if (sortedBooks[bookSets[j]].length === 3) {
                    swappedBooks = true;
                    sortedBooks[currentBookSet].pop();
                    sortedBooks[bookSets[j]].push(1);
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