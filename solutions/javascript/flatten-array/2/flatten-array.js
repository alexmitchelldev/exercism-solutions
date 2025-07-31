export const flatten = (array, flattened = []) => {
  for (const element of array) {
    if (Array.isArray(element)) {
      flatten(element, flattened);
    } else if (element !== null && element !== undefined) {
      flattened.push(element);
    }
  }

  return flattened;
};
