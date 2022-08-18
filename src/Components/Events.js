import React from "react";
import MoreButton, { TimeLineDot } from "./MoreButton";
import { Timeline } from "antd";
export default function Events() {
  return (
    <div className="card-default card-padding event-card flex-column">
      <span className="card-header">Events</span>
      <br />
      <Timeline>
        <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
          <div className="flex-column ">
            <div className="card-text card-text-large">
              Annual National Expo
            </div>
            <div className="event-details flex-row">
              <div className="card-text card-text-small faint-text">
                02 July 2020
              </div>
              <div className="card-text card-text-small faint-text">
                09am - 11am
              </div>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
          <div className="flex-column ">
            <div className="card-text card-text-large">
              Stakeholder Engagement
            </div>
            <div className="event-details flex-row">
              <div className="card-text card-text-small faint-text">
                26 July 2020
              </div>
              <div className="card-text card-text-small faint-text">
                3pm - 6pm
              </div>
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
