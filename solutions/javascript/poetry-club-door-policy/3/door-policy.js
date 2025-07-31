
export function frontDoorResponse(blurb) {
  return blurb[0];
}

export function backDoorResponse(blurb) {
  let trimmedBlurb = blurb.trim();
  return trimmedBlurb[trimmedBlurb.length - 1];
}

function capitalize(word) {
  let capitalizedWord = '';

  for (const letter of word) {
    word.indexOf(letter) === 0 ? capitalizedWord += letter.toUpperCase() : capitalizedWord += letter.toLowerCase();
  }

  return capitalizedWord;
}

export function frontDoorPassword(responses) {
  return capitalize(responses);
}

export function backDoorPassword(responses) {
  return capitalize(`${responses}, please`);
}
