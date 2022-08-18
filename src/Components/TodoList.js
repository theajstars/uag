import React from "react";
import MoreButton, { TimeLineDot } from "./MoreButton";
import { Timeline } from "antd";
export default function TodoList() {
  return (
    <div className="card-default card-padding todo-card flex-column">
      <div className="flex-row card-header-row">
        <span className="card-header">To-Do List</span>
        <span className="add-button">
          <i className="far fa-plus"></i>
        </span>
      </div>
      <br />
      <Timeline>
        <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
          <div className="flex-row todo-row">
            <div className="flex-column">
              <div className="card-text card-text-large">Hilton Hotel Inn</div>
              <div className="card-text card-text-large faint-text">
                Final Phase Write-Up
              </div>
            </div>
            <div className="todo-details">
              <span className="card-text card-text-smaller">
                Due date: <span className="text-red">Tomorrow</span>
              </span>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
          <div className="flex-row todo-row">
            <div className="flex-column">
              <div className="card-text card-text-large">Project proposal</div>
              <div className="card-text card-text-large faint-text">
                Make a draft of needs assessment
              </div>
            </div>
            <div className="todo-details">
              <span className="card-text card-text-smaller">
                Due date: <span className="text-orange">1 Days</span>
              </span>
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
      <MoreButton />
    </div>
  );
}
