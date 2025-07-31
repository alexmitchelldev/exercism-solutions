const VerseToAnimalMap = new Map([
  [1, ['fly']],
  [2, ['spider', 'It wriggled and jiggled and tickled inside her.']],
  [3, ['bird', 'How absurd to swallow a bird!']],
  [4, ['cat', 'Imagine that, to swallow a cat!']],
  [5, ['dog', 'What a hog, to swallow a dog!']],
  [6, ['goat', 'Just opened her throat and swallowed a goat!']],
  [7, ['cow', `I don't know how she swallowed a cow!`]],
  [8, ['horse', `She's dead, of course!`]]
])

const lastLine = () => {
  return `I don't know why she swallowed the fly. Perhaps she'll die.`;
}

const firstLine = (verseNumber) => {
  return `I know an old lady who swallowed a ${VerseToAnimalMap.get(verseNumber)[0]}.`;
}

const swallowedLine = (verseNumber) => {
  return `She swallowed the ${VerseToAnimalMap.get(verseNumber)[0]} to catch the ${VerseToAnimalMap.get(verseNumber - 1)[0]}${verseNumber - 1 === 2 ? ' that wriggled and jiggled and tickled inside her' : ''}.`;
};

export class Song {

  verses (firstVerse, lastVerse) {
    let verses = '';
    for (let i = firstVerse; i <= lastVerse; i++) {
      verses += this.getVerse(i);
      verses = [verses, '\n'].join('');
    } 

    return verses;
  }

  verse (verse) {
    return this.getVerse(verse);
  }

  getVerse(verseNumber) {
    let verse = [];

    verse.push(firstLine(verseNumber));
    verse.push('\n');

    if (verseNumber === 8) {
      verse.push(VerseToAnimalMap.get(verseNumber)[1]);
      verse.push('\n');
      return verse.join('');

    } else if (verseNumber > 1) {
      for (let i = 0; i < verseNumber - 1; i++) {
        if (i === 0) {
          verse.push(VerseToAnimalMap.get(verseNumber - i)[1]);
          verse.push('\n');
        }
        verse.push(swallowedLine(verseNumber - i));
        verse.push('\n');
      }
    }

    verse.push(lastLine());
    verse.push('\n');
    
    return verse.join('');
  }
}