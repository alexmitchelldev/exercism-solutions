export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
    const longestChoice       = option1.length > option2.length ? option1.length : option2.length;
    const betterChoiceString  = `is clearly the better choice.`; 
    for (let i = 0; i < longestChoice; i++) {
      if (option1[i] !== option2[i]) {
        if (option1[i] < option2[i]) {
          return `${option1} ${betterChoiceString}`;
        } else {
          return `${option2} ${betterChoiceString}`
        }
      }
    }
}


export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}
