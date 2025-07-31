//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (string) => {
  let result = '';
  for (const letter of string) {
    switch (letter) {
      case 'G':
        result += 'C';
        break;
      case 'C':
        result += 'G';
        break;
      case 'T':
        result += 'A';
        break;
      case 'A':
        result += 'U';
        break;
      default:
        break;
    }
  }
  // for ( let i = 0; i < string.length; i++ ) {
  //   switch (string[i]) {
  //     case 'G':
  //       result += 'C';
  //       break;
  //     case 'C':
  //       result += 'G';
  //       break;
  //     case 'T':
  //       result += 'A';
  //       break;
  //     case 'A':
  //       result += 'U';
  //       break;
  //     default:
  //       break;
  //   }
  // }
  return result;
};
