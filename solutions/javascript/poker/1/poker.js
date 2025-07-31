const FACE_CARDS = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}

const HAND_SCORES = {
  pair: 1,
  two_pair: 2,
  three_of_a_kind: 3,
  straight: 4,
  flush: 5,
  full_house: 6,
  four_of_a_kind: 7,
  straight_flush: 8
}

const getCardValue = card => {
  const faceCards = Object.keys(FACE_CARDS);
  const value = card.substring(0, card.length - 1);

  if (faceCards.indexOf(value) > - 1) {
    return FACE_CARDS[value];
  }

  return (parseInt(value));
};

const getCardSuit = card => {
  return card[card.length - 1];
}

const getCards = hand => {
  return hand.split(' ');
};

const sortHand = hand => {
  const cards = Array.isArray(hand) ? hand :  getCards(hand);
  let sorted = cards.sort((a, b) => {
    return getCardValue(a) - getCardValue(b);
  });

  // Handle low ace
  if (getCardValue(sorted[sorted.length - 1]) === FACE_CARDS.A) {
    if (getCardValue(sorted[3]) !== FACE_CARDS.K && getCardValue(sorted[3]) !== FACE_CARDS.A) {
      let lastCard = sorted.splice(4);
      sorted = lastCard.concat(sorted);
    }
  }

  return sorted;
};

const getHighestCardHands = hands => {
  let indexes = [];
  let highestCardHands = [];

  for (const hand of hands) {
    const sortedReversed = sortHand(hand).reverse();
    if (highestCardHands.length === 0) {
      indexes.push(0);
      highestCardHands.push(sortedReversed);
    } else {
      const highestHand = highestCardHands[0];
      let isHigher = false;
      let isTie = true;
      for (let i = 0; i < sortedReversed.length; i++) {
        isHigher = ((getCardValue(sortedReversed[i]) > getCardValue(highestHand[i])) || isHigher) ? true : false;
        if (isTie) {
          isTie = (getCardValue(sortedReversed[i]) === getCardValue(highestHand[i]));
        }
      }

      if (isHigher) {
        highestCardHands[0] = sortedReversed;
        indexes[0] = hands.indexOf(hand);
      } else if (isTie) {
        indexes.push(hands.indexOf(hand));
      }
    }
  }

  return hands.filter((hand, index) => {
    return indexes.indexOf(index) > -1
  })
};

const getOccurancess = hand => {
  const cards = getCards(hand);
  let occurances = {};

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    if (occurances[getCardValue(card)]) {
      occurances[getCardValue(card)] += 1;
    } else {
      occurances[getCardValue(card)] = 1;
    }
  }

  return occurances;
}

const isStraightFlush = hand => {
  return isStraight(hand) && isFlush(hand);
}

const isFourOfAKind = hand => {
  const occurances = getOccurancess(hand);
  const fourOfAKindStrings = ['4,1', '1,4'];

  return fourOfAKindStrings.indexOf(Object.values(occurances).toString()) > -1;
}


const isFullHouse = hand => {
  const occurances = getOccurancess(hand);
  const fullHouseStrings = ['3,2', '2,3'];

  return fullHouseStrings.indexOf(Object.values(occurances).toString()) > -1;
}

const isFlush = hand => {
  const cards = getCards(hand);
  const [firstCard, ...rest] = cards;

  return rest.every((card) => {
    return getCardSuit(card) === getCardSuit(firstCard);
  })
};

const isStraight = hand => {
  let cards = sortHand(hand);
  let result = true;
  let firstCard = cards[0];
  let lastCard = cards[4];

  if (getCardValue(firstCard) === FACE_CARDS.A) {
    cards.shift();
    firstCard = cards[0];
  }

  if (getCardValue(lastCard) === FACE_CARDS.A) {
    cards.pop();
  }

  cards.forEach((card, index) => {
    if (getCardValue(card) !== getCardValue(firstCard) + index) {
      result = false;
    }
  })

  return result;
};

const getBestStraight = hands => {
  const sortedHands = hands.map((hand) => {
    return sortHand(hand);
  })

  let [hand1, hand2] = sortedHands;

  if (getCardValue(hand1[0]) === FACE_CARDS.A || getCardValue(hand2[0]) === FACE_CARDS.A) {
    hand1.shift();
    hand2.shift();
  }

  if (getCardValue(hand1[0]) > getCardValue(hand2[0])) {
    return [hands[0]];
  } else if (getCardValue(hand2[0]) > getCardValue(hand1[0])) {
    return [hands[1]];
  } else {
    return [hands[0], hands[1]];
  }
}

const isThreeOfAKind = hand => {
  const occurances = getOccurancess(hand);
  const occurancesString = Object.values(occurances).toString();
  const threeOfAKindStrings = ['3,1,1', '1,3,1', '1,1,3'];

  return threeOfAKindStrings.indexOf(occurancesString) > -1;
}

const isTwoPair = hand => {
  const occurances = getOccurancess(hand);
  const occurancesString = Object.values(occurances).toString();
  const twoPairStrings = ['1,2,2', '2,1,2', '2,2,1'];

  return twoPairStrings.indexOf(occurancesString) > -1;
}

const isPair = (hand) => {
  const cards = getCards(hand);
  for (const card of cards) {
    if (cards.filter((currentCard) => {
      return getCardValue(currentCard) === getCardValue(card);
    }).length > 1) {
      return true;
    }
  }

  return false;
};

const getBestTwoPair = (hands) => {
  const [hand1, hand2] = hands;
  let hand1Cards = getCards(hand1);
  let hand2Cards = getCards(hand2);

  let hand1Pairs = sortHand(hand1Cards.filter((card) => { return hand1Cards.filter((c) => { return getCardValue(c) === getCardValue(card) }).length === 2 })).reverse();
  let hand2Pairs = sortHand(hand2Cards.filter((card) => { return hand2Cards.filter((c) => { return getCardValue(c) === getCardValue(card) }).length === 2 })).reverse();

  for (let i = 0; i < hand1Pairs.length; i++) {
    if (getCardValue(hand1Pairs[i]) > getCardValue(hand2Pairs[i])) {
      return [hand1];
    } else if (getCardValue(hand1Pairs[i]) < getCardValue(hand2Pairs[i])) {
      return [hand2];
    }
  }

  const hand1Kicker = hand1Cards.filter((card) => { return hand1Cards.filter((c) => { return getCardValue(c) === getCardValue(card) }).length === 1 });
  const hand2Kicker = hand2Cards.filter((card) => { return hand2Cards.filter((c) => { return getCardValue(c) === getCardValue(card) }).length === 1 });

  if (getCardValue(hand1Kicker[0]) > getCardValue(hand2Kicker[0])) {
    return [hand1];
  } else if (getCardValue(hand1Kicker[0]) < getCardValue(hand2Kicker[0])) {
    return [hand2];
  }

  return [hand1, hand2];
}



export const bestHands = (hands) => {
  let handScore = 0;
  let result = [];

  const checkHandScore = (hand, score) => {
    if (handScore < score) {
      result = [];
    }
    handScore = score;
    result.push(hand);

    if (score === HAND_SCORES.two_pair) {
      if (result.length > 1) {
        result = getBestTwoPair(result);
      }
    }
    if (score === HAND_SCORES.straight) {
      if (result.length > 1) {
        result = getBestStraight(result);
      }
    }
  };

  for (const hand of hands) {
    if (isStraightFlush(hand)) {
      checkHandScore(hand, HAND_SCORES.straight_flush);
      continue;
    }
    if (isFourOfAKind(hand)) {
      checkHandScore(hand, HAND_SCORES.four_of_a_kind);
      continue;
    }
    if (isFullHouse(hand)) {
      checkHandScore(hand, HAND_SCORES.full_house);
      continue;
    }
    if (isFlush(hand)) {
      checkHandScore(hand, HAND_SCORES.flush);
      continue;
    }
    if (isStraight(hand)) {
      checkHandScore(hand, HAND_SCORES.straight);
      continue;
    }
    if (isThreeOfAKind(hand)) {
      checkHandScore(hand, HAND_SCORES.three_of_a_kind);
      continue;
    }
    if (isTwoPair(hand)) {
      checkHandScore(hand, HAND_SCORES.two_pair);
      continue;
    }
    if (isPair(hand)) {
      checkHandScore(hand, HAND_SCORES.pair);
      continue;
    }
  }

  return result.length === 0 ? getHighestCardHands(hands) : getHighestCardHands(result);
};