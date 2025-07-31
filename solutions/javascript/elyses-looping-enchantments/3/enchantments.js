// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let instances = 0;
  
  stack.forEach(currentCard => {
    if (currentCard === card) {
      instances++;
    }
  });

  // for (const currentCard of stack) {
  //   if (currentCard === card) {
  //     instances++;
  //   }
  // }
  return instances;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let oddCards  = 0,
      evenCards = 0;

  stack.forEach(card => {
    card % 2 === 0 ? evenCards++ : oddCards++;
  });
  // for (const card of stack) {
  //   card % 2 === 0 ? evenCards++ : oddCards++;
  // }

  return type ? evenCards : oddCards;
}
