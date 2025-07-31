export const isPangram = (sentence) => {
  const sentenceToLowerCase = sentence.toLowerCase();
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (const letter of sentenceToLowerCase) {
    if (alphabet.includes(letter)){
      alphabet.splice(alphabet.indexOf(letter), 1);
    }
  }
  if (alphabet.length > 0) {
    return false;
  } else {
    return true;
  }
};
