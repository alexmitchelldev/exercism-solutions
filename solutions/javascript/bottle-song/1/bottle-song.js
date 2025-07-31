const BottleCountMap = new Map([
  [0, 'no'],
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
  [6, 'Six'],
  [7, 'Seven'],
  [8, 'Eight'],
  [9, 'Nine'],
  [10, 'Ten']
])

const bottlePluralOrSingle = (numBottles) => {
  return numBottles > 1 || numBottles === 0 ? 'bottles' : 'bottle';
}

const introLine = (numBottles) => {
  return `${BottleCountMap.get(numBottles)} green ${bottlePluralOrSingle(numBottles)} hanging on the wall,`;
}

const fallLine = () => {
  return 'And if one green bottle should accidentally fall,';
}

const remainderLine = (numBottles) => {
  return `There'll be ${BottleCountMap.get(numBottles).toLowerCase()} green ${bottlePluralOrSingle(numBottles)} hanging on the wall.`;
}

export const recite = (initialBottlesCount, takeDownCount) => {
  let verses = [];

  for (let i = 0; i < takeDownCount; i++) {
    verses.push(introLine(initialBottlesCount - i), introLine(initialBottlesCount - i));
    verses.push(fallLine());
    verses.push(remainderLine(initialBottlesCount - i - 1));
    if (takeDownCount > 1 && i + 1 < takeDownCount) {
      verses.push(``);
    }
  }

  return verses;
};