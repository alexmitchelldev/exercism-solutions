const removeInvalidChars = string => {
  const invalidChars  = [`!`, `:`, `"`, `,`, `\n`, `.`, '&', '@', '$', '%', '^'];
  let validString = '';
  
  for (const char of string) {
    if (!invalidChars.includes(char)) {
      validString += char;
    }
    if (char === `.` || char === ',') {
      validString += ` `;
    }
  }

  return validString;
};

const removeQuotations = array => {
  return array.map((word) => {
    return word.startsWith(`'`) && word.endsWith(`'`) ? word.substring(1, word.length -1) : word;
  });
};

export const countWords = string => {
  let counts = {};
  
  const validString   = removeInvalidChars(string);
  const arrayOfWords  = validString.toLowerCase().split(' ');
  const arrayWithoutQuotations = removeQuotations(arrayOfWords);

  for (const word of arrayWithoutQuotations) {
    if (word.startsWith(`'`) && word.endsWith(`'`)){
      word = word.substring(1, word.length - 1);
    }
    if (word !== '') {
      Boolean(counts[word]) ? counts[word]++ : counts[word] = 1;
    }
  }

  return counts;
};
