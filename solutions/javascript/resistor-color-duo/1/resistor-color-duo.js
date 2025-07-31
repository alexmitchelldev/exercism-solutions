//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  return parseInt(COLORS.indexOf(color1).toString() + COLORS.indexOf(color2).toString());
};

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];