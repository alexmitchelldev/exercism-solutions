export class Series {
  constructor(series) {
    this.series = series.split("").map(stringDigit => Number(stringDigit));
  }

  validate (sliceLength) {
    if (sliceLength === 0) {
      throw `slice length cannot be zero`;
    } else if (sliceLength < 0) {
      throw `slice length cannot be negative`;
    } else if (this.series.length === 0) {
      throw `series cannot be empty`;
    } else if (this.series.length < sliceLength) {
      throw `slice length cannot be greater than series length`;
    }
  }

  slices(sliceLength) {
    this.validate(sliceLength);
    let result = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      result.push(this.series.slice(i, i + sliceLength));
    }
    
    return result;
  }
 }
