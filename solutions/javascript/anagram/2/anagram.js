const generateWordLetterCountObject = word => {
  //returns an object where each key indicates the presence of a letter in the word and number of occurances in the word
  let result = {};
  for (const letter of word) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

const sortObjectByKeysAlphabetically = object => {
  //returns an objected sorted by its keys alphabetically
  return Object.keys(object).sort().reduce((acc, key) => ({
    ...acc, [key]: object[key]
  }), {});
};

const orderedLetterCountObject = word => {
  return sortObjectByKeysAlphabetically(generateWordLetterCountObject(word.toLowerCase()));
}

export const findAnagrams = (word, anagrams) => {
  const anagramLetters = orderedLetterCountObject(word);
  let detectedAnagrams = [];
  
  for (const potentialAnagram of anagrams) {
    const potentialAnagramLetterCountObject = orderedLetterCountObject(potentialAnagram);
    if (word.toLowerCase() !== potentialAnagram.toLowerCase()) {
      if (JSON.stringify(anagramLetters) === JSON.stringify(potentialAnagramLetterCountObject)) {
        detectedAnagrams.push(potentialAnagram);
      }
    }
  }

  return detectedAnagrams;
};
