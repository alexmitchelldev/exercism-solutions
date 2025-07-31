export function find(haystack: number[], needle: number, subHaystack?: number[]): number {
  let stackToCheck: number[] = subHaystack ? subHaystack : haystack;
  let middleIndex = getMiddleIndex(stackToCheck);

  if (haystack.length === 0) {
    throw Error ('Value not in array');
  }
  
  if (subHaystack?.length === 1 && subHaystack[0] !== needle) {
    throw Error ('Value not in array');
  }

  if (stackToCheck[middleIndex] === needle) {
    return haystack.indexOf(stackToCheck[middleIndex]);
  }
  
  let nextSideToCheck: string = stackToCheck[middleIndex] > needle ? 'left' : 'right';
  let substack: number[] = nextSideToCheck === 'left' ? stackToCheck.slice(0, middleIndex) : stackToCheck.slice(middleIndex, stackToCheck.length);

  return find (haystack, needle, substack);
}

function getMiddleIndex (array: number[]): number {
  return Math.floor(array.length / 2);
}
