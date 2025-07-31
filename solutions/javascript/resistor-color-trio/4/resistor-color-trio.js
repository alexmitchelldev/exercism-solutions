const BANDS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export class ResistorColorTrio {
  constructor(bands = []) {
    this.bands = bands;
    this.label = this.label();
  }

  label() {
    if (this.bands.filter((band) => {
      return Object.keys(BANDS).indexOf(band) === -1;
    }).length > 0) {
      throw new Error(/invalid color/);
    }
    // for (const band of this.bands) {
    //   if (Object.keys(BANDS).indexOf(band) === -1) {
    //     throw new Error(/invalid color/);
    //   }
    // }

    const [color1, color2, color3] = this.bands;

    let value = (BANDS[color1] * 10 + BANDS[color2]) * Math.pow(10, BANDS[color3]);
    const unit = value > 1000 ? 'kiloohms' : 'ohms';
    value = value > 1000 ? value / Math.pow(10, 3) : value;

    return `Resistor value: ${value} ${unit}`;
  }
}