export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((totalBirds, daysBirdCount) => {
    return totalBirds + daysBirdCount;
  }, 0);
}

export function birdsInWeek(birdsPerDay, week) {
  let result  = 0;
  const index = (week - 1) * 7;
  for (let i = 0; i < 7; i++) {
    result += birdsPerDay[i+ index];
  }
  return result;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    }
  }
  return birdsPerDay;
}
