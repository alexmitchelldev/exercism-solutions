export function timeToMixJuice(name) {
  const juices = {
    0.5 : "Pure Strawberry Joy",
    1.5 : ["Energizer", "Green Garden"],
    3   : "Tropical Island",
    5   : "All or Nothing"
  }

  for (const key in juices) {
    if (juices[key].includes(name)) {
      console.log(key);
      return Number(key);
    }
  }
  return 2.5;
}

export function limesToCut(wedgesNeeded, limes) {
  let totalLimesNeeded = 0

  while (wedgesNeeded > 0) {
    if (limes[0] === 'small') {
      totalLimesNeeded++;
      wedgesNeeded = wedgesNeeded - 6;
      limes.shift();
    } else if (limes[0] === 'medium') {
      totalLimesNeeded++;
      wedgesNeeded = wedgesNeeded - 6;
      limes.shift();
    } else if (limes[0] === 'large') {
      totalLimesNeeded++;
      wedgesNeeded = wedgesNeeded - 6;
      limes.shift();
    }
  }
  return totalLimesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
