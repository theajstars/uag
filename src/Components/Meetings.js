import React, { useState } from "react";
import MoreButton from "./MoreButton";
import meetings from "../Assets/JSON/Meetings.json";
import { Modal, Input, Calendar } from "antd";

export default function Meetings() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [myMeetings, setMyMeetings] = useState(meetings.meetings);
  const onPanelChange = (value, mode) => {
    // console.log(value.format("YYYY-MM-DD"), mode);
  };
  const onMeetingDateChange = (value) => {
    console.log(value.format("YYYY-MM-DD"));
  };
  return (
    <div className="card-default card-padding meeting-card flex-column">
      <div className="flex-row card-header-row">
        <span className="card-header">Meetings</span>
        <span className="add-button">
          <i className="far fa-plus"></i>
        </span>
      </div>
      <hr className="hr-default" />
      {myMeetings.map((meeting, index) => {
        return (
          <div className="meeting flex-row">
            <div className="card-text card-text-large">{meeting.title}</div>
            <div className="meeting-details flex-column">
              <span className="card-text card-text-small">{meeting.date}</span>
              <span className="card-text card-text-smaller text-red">
                {meeting.time}
              </span>
            </div>
          </div>
        );
      })}
      <Modal
        title="My Meetings"
        visible={isModalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        {myMeetings.map((meeting, index) => {
          return (
            <div className="my-meetings-container">
              <div className="meeting flex-row">
                <div className="card-text card-text-large">{meeting.title}</div>
                <div className="meeting-details flex-column">
                  <span className="card-text card-text-small">
                    {meeting.date}
                  </span>
                  <span className="card-text card-text-smaller text-red">
                    {meeting.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <br />
        <h4>New Meeting</h4>
        <Input placeholder="Meeting Title" />
        <br />
        <br />
        <h4>Meeting Date</h4>
        <Calendar
          onPanelChange={onPanelChange}
          onChange={onMeetingDateChange}
        />
      </Modal>
      <div className="more-button-container">
        <button className="more-button" onClick={() => setModalVisible(true)}>
          More
        </button>
      </div>
      {/* <MoreButton event={setModalVisible} start={isModalVisible} /> */}
    </div>
  );
}
