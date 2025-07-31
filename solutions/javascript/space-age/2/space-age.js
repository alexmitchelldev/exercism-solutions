export const roundTo2Decimals = number => {
  return Math.round(number * 100) / 100;
}

export const age = (planet, seconds) => {
  let earthAge = seconds / 31557600;
  let mercuryAge = earthAge / 0.2408467;
  let venusAge = earthAge / 0.61519726;
  let marsAge = earthAge / 1.8808158;
  let jupiterAge = earthAge / 11.862615;
  let saturnAge = earthAge / 29.447498;
  let uranusAge = earthAge / 84.016846;
  let neptuneAge = earthAge / 164.79132;
  switch (planet) {
    case 'mercury':
      return roundTo2Decimals(mercuryAge);
    case 'venus':
      return roundTo2Decimals(venusAge);
    case 'earth':
      return roundTo2Decimals(earthAge);
    case 'mars':
      return roundTo2Decimals(marsAge);
    case 'jupiter':
      return roundTo2Decimals(jupiterAge);
    case 'saturn':
      return roundTo2Decimals(saturnAge);
    case 'uranus':
      return roundTo2Decimals(uranusAge);
    case 'neptune':
      return roundTo2Decimals(neptuneAge);
  }
};
