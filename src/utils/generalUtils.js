/* 
  generalUtils.js
*/

import { MONTHS } from "./constants";

export const toTimeString = (date, options = {}, locales = []) => {
  if (date) {
    let d = new Date(date);
    d = d.toLocaleTimeString(locales, options);
    return d;
  }
};

export const toDateString = (date) => {
  if (date) {
    let d = new Date(date);
    d = d.toDateString();
    return d;
  }
};

export const toDateTimeString = (date) => {
  if (date) {
    let d = new Date(date);
    d = `${d.toDateString()} ${d.toLocaleTimeString()}`;
    return d;
  }
};

export const getMonthByName = (selectedMonth) => {
  const monthObject = MONTHS.find((month) => month.label === selectedMonth);
  return monthObject.value;
};

export const getFullName = (data = {}) => {
  if (!data.firstName) {
    return "No Name";
  }
  return `${data.firstName} ${data.lastName}`;
};

export const isValidEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@mikaels.com/;
  return emailRegex.test(email.toLowerCase());
};

export const hasDuplicatesInArray = (array) => {
  return new Set(array).size !== array.length;
};

export const boolToHumanReadableString = (bool) => {
  if (bool === undefined || bool === null || bool === "") {
    return "";
  }
  return bool === true ? "Yes" : "No";
};

export const capitalize = (str) =>
  `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
