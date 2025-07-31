//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (numberString, span) => {
  // Validate Arguments
  if (numberString.length < span) {
    throw 'Span must be smaller than string length';
  }
  if (span === 0) {
    return 1;
  }
  if (isNaN(numberString)) {
    throw 'Digits input must only contain digits';
  }
  if (span < 0) {
    throw 'Span must be greater than zero';
  }

  const numbersArray = getNumbersArrayFromNumberString(numberString);
  const largestProduct = getLargestProduct(numbersArray, span);

  return largestProduct;
};

const getLargestProduct = (numbersArray, span) => {
  let largestSeriesProduct = 0;

  for (let i = 0; i < numbersArray.length - span + 1; i++) {
    let currentSeries = [];
    for (let j = 0; j < span; j++) {
      currentSeries.push(numbersArray[i + j]);
    }
    let currentSeriesProduct = getSeriesProduct(currentSeries);

    if (currentSeriesProduct > largestSeriesProduct) {
      largestSeriesProduct = getSeriesProduct(currentSeries);
    }
  };

  return largestSeriesProduct;
}

const getNumbersArrayFromNumberString = numberString => {
  return numberString.split('').map(number => Number(number));
};

const getSeriesProduct = seriesArray => {
  let product = seriesArray[0];

  for (let i = 1; i < seriesArray.length; i++) {
    product *= seriesArray[i];
  }

  return product;
};