const validBooks      = [1, 2, 3, 4, 5];
const BOOK_PRICE      = 800;
const bookSetDiscount = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
};

const isValidBook = book => {
  return validBooks.includes(book);
}

const calculateDiscount = numberOfBooks => {
  return bookSetDiscount[numberOfBooks] ? bookSetDiscount[numberOfBooks] : 'Invalid book set size'; 
};

const findBookSet = books => {
  let bookSet = {
    books: [],
    indexes: []
  }
  
  for (const book of books) {
    if (isValidBook(book) && !bookSet.books.includes(book)) {
      bookSet.books.push(book);
      bookSet.indexes.push(books.indexOf(book));
    }
  }
  
  return bookSet;
}

const createBookSetsObject = books => {
  let bookSetsObject  = new Object;
  let foundBookSet    = findBookSet(books);
  let counter         = 1;
  
  while(books.length > 0) {
    foundBookSet.indexes.reverse();
    bookSetsObject[`bookSet${counter}`] = foundBookSet.books;

    for (let i = 0; i < foundBookSet.indexes.length; i++) {
      books.splice(foundBookSet.indexes[i], 1);
    }

    foundBookSet = findBookSet(books);
    counter++;
  }

  return bookSetsObject;
}

const findBestDiscount = bookSetsObject => {
  const keys = Object.keys(bookSetsObject);

  function compareVariations (bookSet1, bookSet2) {
    
    let bookSet1LengthMinus1 = (calculateDiscount(bookSetsObject[keys[bookSet1]].length - 1) * BOOK_PRICE);
    let bookSet2LengthPlus1  = (calculateDiscount(bookSetsObject[keys[bookSet2]].length + 1) * BOOK_PRICE);
    let bookSet1Length       = (calculateDiscount(bookSetsObject[keys[bookSet1]].length) * BOOK_PRICE);
    let bookSet2Length       = (calculateDiscount(bookSetsObject[keys[bookSet2]].length) * BOOK_PRICE);

    return ((bookSet1LengthMinus1 + bookSet2LengthPlus1) < (bookSet1Length + bookSet2Length));
  }

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (compareVariations (i, j)) {
          bookSetsObject[keys[i]].splice(0, 1);
          bookSetsObject[keys[j]].push(1);
      }
    }
  }

  return bookSetsObject;
}

export const cost = (books) => {
  let total = 0;

  let bookSetsObject = createBookSetsObject(books);
  findBestDiscount(bookSetsObject);

  for (const bookSet in bookSetsObject) {
    total += ((bookSetsObject[bookSet].length * BOOK_PRICE) * calculateDiscount(bookSetsObject[bookSet].length));
  }

  return total;
};