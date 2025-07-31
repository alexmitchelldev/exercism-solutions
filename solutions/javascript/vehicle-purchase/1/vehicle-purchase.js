export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
    let longestChoice = 0;
    option1.length > option2.length ? longestChoice = option1.length : longestChoice = option2.length;
    
    for (let i = 0; i < longestChoice; i++) {
      if (option1[i] < option2[i]) {
        return `${option1} is clearly the better choice.`;
      } else if (option2[i] < option1[i]) {
        return `${option2} is clearly the better choice.`;
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
