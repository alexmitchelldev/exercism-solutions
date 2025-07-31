export const find = (haystack, needle) => {
  return binarySearchRecursive(haystack, needle, 0, haystack.length);
};

function binarySearchRecursive (haystack, needle, firstIndex, lastIndex) {
  let middleIndex= Math.floor((firstIndex + lastIndex) / 2);
  let middleElement = haystack[middleIndex];

  if (middleElement === needle) {
    return middleIndex;
  }

  if (firstIndex === lastIndex) {
    throw Error('Value not in array');
  }

  if (needle < middleElement) {
    lastIndex = middleIndex - 1;
  } else if (needle > middleElement) {
    firstIndex = middleIndex + 1;
  }

  return binarySearchRecursive(haystack, needle, firstIndex, lastIndex);
}