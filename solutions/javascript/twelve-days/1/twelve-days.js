const ORDINAL_INDICATORS = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "eighth",
  9: "ninth",
  10: "tenth",
  11: "eleventh",
  12: "twelfth",
};

const GIFTS = {
  0: "a Partridge in a Pear Tree",
  1: "two Turtle Doves",
  2: "three French Hens",
  3: "four Calling Birds",
  4: "five Gold Rings",
  5: "six Geese-a-Laying",
  6: "seven Swans-a-Swimming",
  7: "eight Maids-a-Milking",
  8: "nine Ladies Dancing",
  9: "ten Lords-a-Leaping",
  10: "eleven Pipers Piping",
  11: "twelve Drummers Drumming",
};

const introText = (verseNumber) => {
  return `On the ${ORDINAL_INDICATORS[verseNumber]} day of Christmas my true love gave to me:`;
};

const getGifts = (startingVerse, endVerse) => {
  let verses = [];
  let i = 0;
  let end = endVerse || startingVerse;

  for (i; i < end; i++) {
    verses.push(GIFTS[i]);
  }

  return verses;
}

export const recite = (startVerse, endVerse) => {
  let i = endVerse ? startVerse : 1;
  let end = endVerse ? endVerse : startVerse;

  const gifts = getGifts(startVerse, endVerse);

  let verses = [];
  let verseGifts = null;
  let lastVerse = null;


  for (i; i <= end; i++) {
    verseGifts = gifts.slice(0, i).reverse();
    if (verses.length >= 1 || endVerse && i !== 1) {
      lastVerse = `and ${verseGifts[verseGifts.length - 1]}`;
      verseGifts[verseGifts.length - 1] = lastVerse;
    }
    verses.push(`${introText(i)} ${verseGifts.join(", ")}.${endVerse && verses.length < endVerse - startVerse ? '\n\n' : '\n'}`);
  }

  return endVerse ? verses.join("") : verses[verses.length - 1];
};