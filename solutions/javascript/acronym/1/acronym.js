export const parse = string => {
  const wordParseTriggers = ' -_,';
  let acronym = '';
  let word = '';

  for (let i = 0; i < string.length; i++) {
    if (wordParseTriggers.includes(string[i])) {
      while (wordParseTriggers.includes(string[i+1])) {
        i++;
      }
      acronym += word[0];
      word = '';
    } else {
      word += string[i];
    }
  }
  acronym += word[0];
  return acronym.toUpperCase();
};
