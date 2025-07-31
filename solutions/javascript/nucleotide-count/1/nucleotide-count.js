export class NucleotideCounts {
  static parse(sequence) {
    let nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }
    let result = '';
    for (const nucleotide of sequence) {
      if (nucleotide !== 'A' && nucleotide !== 'C' && nucleotide !== 'G' && nucleotide !== 'T') {
        throw "Invalid nucleotide in strand";
      }
      for (const key in nucleotides) {
        if (nucleotide === key) {
          nucleotides[key]++;
        }
      }
    }
    for (const key in nucleotides) {
      if (key !== 'T') {
        result += `${nucleotides[key]} `;
      } else {
        result += nucleotides[key];
      }
    }
    return result;
  }
}
