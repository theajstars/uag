import React from "react";
import Avatar from "../Assets/IMG/avatar.jpg";
export default function Profile() {
  return (
    <div className="card-default profile-card flex-row">
      <img src={Avatar} alt="" className="avatar" />
      <div className="flex-column profile-card-right">
        <span className="card-header profile-name">Mr Willem Mouton</span>
        <span className="card-text faint-text">
          Group Chief Executive Officer
        </span>
        <div className="flex-column">
          <span className="card-text faint-text">Productivity</span>
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
