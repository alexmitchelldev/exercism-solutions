const juices = {
  "Pure Strawberry Joy": 0.5,
  "Energizer" : 1.5,
  "Green Garden" : 1.5,
  "Tropical Island" : 3,
  "All or Nothing" : 5
}

export function timeToMixJuice(name) {
  return juices[name] || 2.5;
}

export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesToCut = 0;
  for (let i = 0; i < limes.length; i++) {
    if (wedgesCut < wedgesNeeded) {
      limesToCut++;
      if (limes[i] === 'small') {
        wedgesCut += 6;
      } else if (limes[i] === 'medium') {
        wedgesCut += 8;
      } else if (limes[i] === 'large') {
        wedgesCut += 10;
      }
    } else {
      return limesToCut;
    }
  }
  return limesToCut;

}

export function remainingOrders(timeLeft, orders) {

  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }

  return orders;
}
