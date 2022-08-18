import React from "react";
import MoreButton from "./MoreButton";

export default function Meetings() {
  return (
    <div className="card-default card-padding meeting-card flex-column">
      <div className="flex-row card-header-row">
        <span className="card-header">Meetings</span>
        <span className="add-button">
          <i className="far fa-plus"></i>
        </span>
      </div>
      <hr className="hr-default" />
      <div className="meeting flex-row">
        <div className="card-text card-text-large">Financial Plan Meeting</div>
        <div className="meeting-details flex-column">
          <span className="card-text card-text-small">30 June 2022</span>
          <span className="card-text card-text-smaller text-red">
            09:00 - 10:30
          </span>
        </div>
      </div>
      <div className="meeting flex-row">
        <div className="card-text card-text-large">Stakeholder Engagement</div>
        <div className="meeting-details flex-column">
          <span className="card-text card-text-small">2 July 2022</span>
          <span className="card-text card-text-smaller text-red">
            10:00 - 11:30
          </span>
        </div>
      </div>
      <MoreButton />
    </div>
  );
}
