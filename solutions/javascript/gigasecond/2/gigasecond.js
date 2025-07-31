//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let time = new Date(date.getTime());
  return new Date(time.setUTCMilliseconds(1000000000000));
};