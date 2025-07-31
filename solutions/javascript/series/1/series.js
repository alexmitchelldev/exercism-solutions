
// import { slice } from "core-js/core/array";

// import { slice } from "core-js/core/array";

export class Series {
  constructor(series) {
    this.series = series;
  }

  validate (sliceLength) {
    if (sliceLength === 0) {
      throw `slice length cannot be zero`;
    }

    if (sliceLength < 0) {
      throw `slice length cannot be negative`;
    }

    if (this.series.length < 1) {
      throw `series cannot be empty`;
    }

    if (sliceLength > this.series.length) {
      throw `slice length cannot be greater than series length`;
    }

    return true;
  }

  slices(sliceLength) {
    if (!this.validate(sliceLength)) {
      return this.validate(sliceLength);
    }

    let result = [];
    let serieSlice = [];

    for (let i = 0; i < this.series.length; i++) {
      if (this.series.length - i - sliceLength >= 0) {
        for (let j = 0; j < sliceLength; j++) {
          serieSlice.push(Number(this.series[i + j]));
        }
        result.push(serieSlice);
        serieSlice = [];
      }
    }
    return result;
  }
 }
