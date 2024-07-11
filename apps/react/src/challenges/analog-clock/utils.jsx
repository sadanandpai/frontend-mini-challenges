export const ticksCount = 60;
export const clockDigits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const getTimeInAngles = (date) => ({
  seconds: (clockDigits.length / 2) * date.getSeconds(),
  minutes: (clockDigits.length / 2) * date.getMinutes() + date.getSeconds() / 10,
  hours: date.getMinutes() / 2 + (date.getHours() % clockDigits.length) * 30,
});
