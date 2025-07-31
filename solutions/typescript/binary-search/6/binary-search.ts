enum SolutionTypes {
  nonRecursive = 1,
  recursive = 2
}

export function find(haystack: number[], needle: number): number {
  const selectRandomSolution = Math.floor(Math.random() * 2) + 1;

  return selectRandomSolution === SolutionTypes.nonRecursive ? binarySearchNonRecursive(haystack, needle) : binarySearchRecursive(haystack, needle, 0, haystack.length);
}

function binarySearchRecursive (haystack: number[], needle: number, firstIndex: number, lastIndex: number): number | never {
  let middleIndex: number = Math.floor((firstIndex + lastIndex) / 2);
  let middleElement: number = haystack[middleIndex];

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

function binarySearchNonRecursive (haystack: number[], needle: number): number {
  let low = 0;
  let high: number = haystack.length - 1;

  if (haystack.length === 0) {
    throw Error('Value not in array');
  }

  while (low <= high) {
    let mid: number = Math.floor(low + (high - low) / 2);
    if (needle < haystack[mid]) {
      high = mid - 1;
    } else if (needle > haystack[mid]) {
      low = mid + 1;
    } else {
      return Math.floor(mid);
    }
  }

  throw Error('Value not in array');
}

