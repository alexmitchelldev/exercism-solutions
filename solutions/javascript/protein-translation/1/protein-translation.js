//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = str => {
  let RNA = '';
  let results = [];
  if (str === undefined) {
    return results;
  }
  for (let i = 0; i < str.length; i += 3) {
    RNA += str[i];
    RNA += str[i + 1];
    RNA += str[i + 2];
    switch (RNA) {
      case 'AUG':
        results.push('Methionine');
        break;
      case 'UUU':
        results.push('Phenylalanine');
        break;
      case 'UUC':
        results.push('Phenylalanine');
        break;
      case 'UUA':
        results.push('Leucine');
        break;
      case 'UUG':
        results.push('Leucine');
        break;
      case 'UCU':
        results.push('Serine');
        break;
      case 'UCC':
        results.push('Serine');
        break;
      case 'UCA':
        results.push('Serine');
        break;
      case 'UCG':
        results.push('Serine');
        break;
      case 'UAU':
        results.push('Tyrosine');
        break;
      case 'UAC':
        results.push('Tyrosine');
        break;
      case 'UGU':
        results.push('Cysteine');
        break;
      case 'UGC':
        results.push('Cysteine');
        break;
      case 'UGG':
        results.push('Tryptophan');
        break;
      case 'UAA':
        return results;
      case 'UAG':
        return results;
      case 'UGA':
        return results;
      default:
        throw `Invalid codon`;
    }
    RNA = '';
  }
  return results;
};
