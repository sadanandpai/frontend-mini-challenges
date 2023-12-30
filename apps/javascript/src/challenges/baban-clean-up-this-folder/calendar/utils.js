import { monthToDaysMapping } from "./data.js";

export const getElementFromHtml = (html) => {
  const range = document.createRange();
  return range.createContextualFragment(html.trim()).children[0];
};

export const getDaysCount = (month, year) => {
  if (month === 1) {
    return new Date(year, month + 1, 0).getDate();
  }
  return monthToDaysMapping[month];
};

export const getDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};
