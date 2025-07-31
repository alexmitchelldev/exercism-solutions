const checkForQuestionMark = message => {
  message = message.trim();
  if (message.slice(-1) === '?') {
    return true;
  } else {
    return false;
  }
}

const checkAllLettersCapital = message => {
  if (message === message.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

const containsValidLetter = message => {
  const alphabet  = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of message) {
    if (alphabet.includes(letter.toLowerCase())) {
      return true;
    }
  }
  return false;
}

const containsNumber = message => {
  const numbers = '1234567890';
  for (const letter of message) {
    if (numbers.includes(letter.toLowerCase())) {
      return true;
    }
  }
  return false;
}

export const hey = (message) => {
  if (checkForQuestionMark(message) && checkAllLettersCapital(message) && containsValidLetter(message)) {
    return `Calm down, I know what I'm doing!`;
  }

  if (checkForQuestionMark(message)) {
    return 'Sure.';
  }

  if (!containsValidLetter(message) && !containsNumber(message)) {
    return `Fine. Be that way!`;
  }

  if (checkAllLettersCapital(message) && containsValidLetter(message)) {
    return 'Whoa, chill out!';
  }

  return `Whatever.`;
};
