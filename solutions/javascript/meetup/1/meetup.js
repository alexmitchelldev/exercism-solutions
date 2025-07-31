export const meetup = (year, month, descriptor, day) => {
  const first3DayChars = day.substring(0, 3);
  let dateResult = null;

  if (/teenth/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 13, 20);
  } else if (/first/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 1, 8);
  } else if (/second/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 8, 15);
  } else if (/third/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 15, 22);
  } else if (/fourth/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 22, 29);
  } else if (/last/.test(descriptor)) {
    dateResult = getDate(year, month, first3DayChars, 1, getDaysInMonth(year, month) + 1);
  }

  return dateResult;
};

const getDate = (year, month, day, startDate, endDate) => {
  let dateResult = null;

  for (startDate; startDate < endDate; startDate++) {
    let currentDate = new Date(year, month - 1, startDate);
    let dateString = currentDate.toString();
    let first3DayChars = dateString.substring(0, 3);

    if (day === first3DayChars) {
      dateResult = currentDate;
    }
  }

  return dateResult;
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
