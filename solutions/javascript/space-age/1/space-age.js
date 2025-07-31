//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
      return Math.round(mercuryAge * 100) / 100;
    case 'venus':
      return Math.round(venusAge * 100) / 100;
    case 'earth':
      return Math.round(earthAge * 100) / 100;
    case 'mars':
      return Math.round(marsAge * 100) / 100;
    case 'jupiter':
      return Math.round(jupiterAge * 100) / 100;
    case 'saturn':
      return Math.round(saturnAge * 100) / 100;
    case 'uranus':
      return Math.round(uranusAge * 100) / 100;
    case 'neptune':
      return Math.round(neptuneAge * 100) / 100;
  }
};
