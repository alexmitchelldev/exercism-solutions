//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  return new Date(date.setUTCMilliseconds(1000000000000));
};

// setSeconds(10**9)