
export function frontDoorResponse(blurb) {
  return blurb[0];
}

export function backDoorResponse(blurb) {
  return blurb.trim().slice(-1);
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
}

export function frontDoorPassword(responses) {
  return capitalize(responses);
}

export function backDoorPassword(responses) {
  return capitalize(`${responses}, please`);
}
