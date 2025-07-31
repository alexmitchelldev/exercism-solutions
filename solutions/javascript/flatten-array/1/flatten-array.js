export const flatten = (arrays, flattened = []) => {
  for (const element of arrays) {
    if (Array.isArray(element)) {
      flatten(element, flattened);
    } else if (element !== null && element !== undefined) {
      flattened.push(element);
    }
  }

  return flattened;
};
