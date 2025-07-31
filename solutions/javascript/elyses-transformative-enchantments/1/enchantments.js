// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(card => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let numArr = deck.map(card => card === 3 ? 333 : card);
  let resultArr = [];

  for (const card of numArr) {
    if (card === 333) {
      for (let i = 0; i < 3; i++) {
        resultArr.push(3);
      }
    } else {
      resultArr.push(card);
    }
  }

  return resultArr;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleTwoIndexes = [];
  middleTwoIndexes.push((deck.length / 2) - 1);
  middleTwoIndexes.push(deck.length / 2);

  return deck.filter((card, index) => middleTwoIndexes.indexOf(index) > -1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstCard = Number(deck.shift());
  const lastCard  = Number(deck.pop());

  deck.splice(deck.length / 2, 0, firstCard);
  deck.splice(deck.length / 2, 0, lastCard);

  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(card => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
