export const keep = (array, callback) => {
  let kept = [];

  for (const element of array) {
    if (callback(element)) {
      kept.push(element);
    }
  }

  return kept;
};

export const discard = (array, callback) => {
  let discarded = [];

  for (const element of array) {
    if (!callback(element)) {
      discarded.push(element);
    }
  }

  return discarded;
};
