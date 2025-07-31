
export function frontDoorResponse(blurb) {
  return blurb[0];
}

export function backDoorResponse(blurb) {
  let trimmedBlurb = blurb.trim();
  return trimmedBlurb[trimmedBlurb.length - 1];
}

function capitalize(word) {
  return `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`;
}

export function frontDoorPassword(responses) {
  return capitalize(responses);
}

export function backDoorPassword(responses) {
  return capitalize(`${responses}, please`);
}
