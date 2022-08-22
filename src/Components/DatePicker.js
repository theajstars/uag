import React, { useState } from "react";
import { Calendar } from "antd";

export default function DatePicker() {
  function getFullDate(date) {
    var d = new Date(date);
    const daysInWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
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
    const day = daysInWeek[d.getDay()];
    const month = months[d.getMonth()];
    const thisDate = d.getDate();
    const year = d.getFullYear();
    return `${day}, ${thisDate} ${month} ${year}`;
  }
  const [date, setDate] = useState("8-28-2022");
  const onDateChange = (value) => {
    const thisDate = value.format("YYYY-MM-DD");
    setDate(thisDate);
  };
  return (
    <div className="card-default card-text-large datepicker-container flex-column">
      <div className="date-display flex-row ">
        {getFullDate(Date.parse(date))}
      </div>
      <Calendar onChange={onDateChange} />
    </div>
  );
}
