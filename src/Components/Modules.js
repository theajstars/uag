import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getFullDate(date) {
  const d = new Date(date);

  var day = d.getDay();
  var month = d.getMonth();
  var year = d.getFullYear();

  var dateNum = d.getDate();
  dateNum = dateNum < 10 ? `0${dateNum}` : dateNum;
  day = days[day];
  month = months[month];
  const fullDateString = `${day}, ${month} ${dateNum} ${year}`;
  return fullDateString;
}
function getFullTime(date) {
  const d = new Date(date);
  var hours = d.getHours();
  var minutes = d.getMinutes();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}
function getDateWithoutDay(date) {
  const d = new Date(date);

  var month = d.getMonth();
  var year = d.getFullYear();
  var dateNum = d.getDate();
  dateNum = dateNum < 10 ? `0${dateNum}` : dateNum;

  month = months[month];
  const fullDateString = `${dateNum} ${month} ${year}`;
  return fullDateString;
}

export { getFullDate, getFullTime, getDateWithoutDay };
