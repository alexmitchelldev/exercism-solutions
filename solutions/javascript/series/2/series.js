// import { slice } from "core-js/core/array";

export class Series {
  constructor(series) {
    this.series = series;
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
    let serieSlice = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      for (let j = 0; j < sliceLength; j++) {
        serieSlice.push(Number(this.series[i + j]));
      }
      result.push(serieSlice);
      serieSlice = [];
    }
    return result;
  }
 }
