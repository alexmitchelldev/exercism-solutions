export const hey = message => {
  const lastCharQuestionMark  = (message.trim().slice(-1) === '?');
  const allLettersCapital     = (message === message.toUpperCase());
  const containsValidLetter   = (/[a-z]/.test(message.toLowerCase()));
  const containsNumber        = (/[1-9]/.test(message)); 

  if (lastCharQuestionMark && allLettersCapital && containsValidLetter) {
    return `Calm down, I know what I'm doing!`;
  }
  if (lastCharQuestionMark) {
    return 'Sure.';
  }
  if (!containsValidLetter && !containsNumber) {
    return `Fine. Be that way!`;
  }
  if  (allLettersCapital && containsValidLetter) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
}