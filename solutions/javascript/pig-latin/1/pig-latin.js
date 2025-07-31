const vowels          = ['a', 'e', 'i', 'o', 'u'];
const vowelEdgeCases  = ['xr', 'yt']

export class translator {
  static translate(string) {

    const findFirstVowel  = word => {
      for (const letter of word) {
        if (vowels.includes(letter.toLowerCase())) {
          return word.indexOf(letter);
        }
      }
    };

    const checkForLetterY = word => {
      for (const letter of word) {
        if (letter === 'y') {
          return word.indexOf(letter);
        }
      }
    };

    const translateWordToPigLatin = string => {
      if (vowels.includes(string[0]) || vowelEdgeCases.includes(string.substring(0, 2))) {
        return `${string}ay`;
      }
  
      if(!vowels.includes(string[0])) {
        if (Boolean(checkForLetterY(string))) {
          const indexOfY = checkForLetterY(string);
  
          if (!vowels.includes(string[indexOfY - 2])) {
            if (string[0] === 'y') {
              return `${string.substring(1, string.length)}${string[0]}ay`;
            } else {
              return `${string.substring(indexOfY, string.length)}${string.substring(0, indexOfY)}ay`;
            }
          }
        }
  
        if (string[0] === 'y') {
          return `${string.substring(1, string.length)}${string[0]}ay`;
        } 
  
        if (string.substring(0, 2) === 'qu') {
          return `${string.substring(2, string.length)}${string.substring(0, 2)}ay`;
        } else if (string.substring(1, 3) === 'qu') {
          return `${string.substring(3, string.length)}${string.substring(0, 3)}ay`;
        } else {
          const firstVowelIndex = findFirstVowel(string);
          return `${string.substring(firstVowelIndex, string.length)}${string.substring(0, firstVowelIndex)}ay`;
        }
      }
    };

    const convertStringToWords = string => {
      return string.split(' ');
    };

    const wordsArray = convertStringToWords(string);

    const convertPhraseToPigLatin = words => {
      let pigLatinPhrase = '';

      for (let i = 0; i < words.length; i++) {
        if (i !== words.length -1) {
          pigLatinPhrase += `${translateWordToPigLatin(words[i])} `;
        } else {
          pigLatinPhrase += `${translateWordToPigLatin(words[i])}`;
        }
      }

      return pigLatinPhrase;
    }

    return convertPhraseToPigLatin(wordsArray);
  }
}
