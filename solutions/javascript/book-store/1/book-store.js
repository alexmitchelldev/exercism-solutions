const validBooks      = [1, 2, 3, 4, 5];
const bookSetDiscount = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
};

const isValidBook = book => {
  return (validBooks.indexOf(book) > -1);
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

export const cost = (books) => {
  let total = 0;
  let bookSetsObject = createBookSetsObject(books);

  for (const key in bookSetsObject) {
    total += ((bookSetsObject[key].length * 800) * calculateDiscount(bookSetsObject[key].length));
  }

  return total;
};