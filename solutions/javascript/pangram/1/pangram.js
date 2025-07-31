//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let sentenceToLowerCase = sentence.toLowerCase();
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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
