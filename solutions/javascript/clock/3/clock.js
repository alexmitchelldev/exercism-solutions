//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
  }

  toString() {
    let hour = this.hour;
    let minutes = this.minutes;

    while (hour < 0 || hour >= 24) {
      hour = hour < 0 ? hour + 24 : hour - 24;
    }

    while (minutes < 0 || minutes >= 60) {
      if (minutes < 0) {
        minutes += 60;
        hour = hour === 0 ? 23 : hour - 1;
      } else if (minutes >= 60) {
        minutes -= 60;
        hour = hour === 23 ? 0 : hour + 1;
      }
    }

    const timeString = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;
    return timeString;
  }

  plus(minutes) {
    return new Clock(this.hour, this.minutes + minutes);
  }

  minus(minutes) {
    return new Clock(this.hour, this.minutes - minutes);
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}