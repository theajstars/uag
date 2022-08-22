import React from "react";

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
  return (
    <div className="card-default card-text-large datepicker-container flex-column">
      <div className="date-display flex-row ">{getFullDate(Date.now())}</div>
      <div className="datepicker">
        <div className="flex-row date-row">
          <span className="date-column flex-column">
            <span className="weekday">Sun</span>
            <span className="date-item">30</span>
            <span className="date-item">8</span>
            <span className="date-item">15</span>
            <span className="date-item">22</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Mon</span>
            <span className="date-item">1</span>
            <span className="date-item">9</span>
            <span className="date-item">16</span>
            <span className="date-item">23</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Tue</span>
            <span className="date-item">2</span>
            <span className="date-item">10</span>
            <span className="date-item">17</span>
            <span className="date-item">24</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Wed</span>
            <span className="date-item">3</span>
            <span className="date-item">11</span>
            <span className="date-item">18</span>
            <span className="date-item date-danger">25</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Thur</span>
            <span className="date-item">5</span>
            <span className="date-item">12</span>
            <span className="date-item">19</span>
            <span className="date-item">26</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Fri</span>
            <span className="date-item">6</span>
            <span className="date-item">13</span>
            <span className="date-item">20</span>
            <span className="date-item date-warning">27</span>
          </span>
          <span className="date-column flex-column">
            <span className="weekday">Sat</span>
            <span className="date-item">7</span>
            <span className="date-item">14</span>
            <span className="date-item">21</span>
            <span className="date-item">28</span>
          </span>
        </div>
      </div>
    </div>
  );
}
