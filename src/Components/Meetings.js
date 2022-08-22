import React, { useState, useEffect } from "react";
import meetings from "../Assets/JSON/Meetings.json";
import { Modal, Input, Calendar, Button, message } from "antd";

import { getDateWithoutDay, getFullDate } from "./Modules";
import TimePicker from "react-time-picker";

export default function Meetings() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [myMeetings, setMyMeetings] = useState(meetings.meetings);

  // New Meeting Information
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingStart, setMeetingStart] = useState("10:00");
  const [meetingEnd, setMeetingEnd] = useState("12:00");

  const onMeetingDateChange = (value) => {
    const date = value.format("YYYY-MM-DD");
    console.log(date);
    setMeetingDate(getDateWithoutDay(date));
  };
  const createMeeting = () => {
    if (
      meetingDate === "" ||
      meetingEnd === null ||
      meetingStart === null ||
      meetingTitle === ""
    ) {
      message.info("Please fill out meeting information");
    } else {
      //Create Meeting
      const meeting = {
        title: meetingTitle,
        date: meetingDate,
        time: `${meetingStart} - ${meetingEnd}`,
      };
      setMyMeetings([...myMeetings, meeting]);
      message.success("Meeting created!");
      setModalVisible(false);
      setMeetingStart("10:00");
      setMeetingEnd("12:00");
      setMeetingTitle("");
    }
  };
  return (
    <div className="card-default card-padding meeting-card flex-column">
      <div className="flex-row card-header-row">
        <span className="card-header">Meetings</span>
        <span className="add-button" onClick={() => setModalVisible(true)}>
          <i className="far fa-plus"></i>
        </span>
      </div>
      <hr className="hr-default" />
      {myMeetings.slice(0, 2).map((meeting, index) => {
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
        <Input
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => {
            setMeetingTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <h4>Meeting Date</h4>
        <Calendar onChange={onMeetingDateChange} />
        <br />
        <br />
        <div className="set-meeting-time flex-row">
          <div>
            <h4>Start Meeting</h4>
            <TimePicker onChange={setMeetingStart} value={meetingStart} />
          </div>
          <div>
            <h4>End Meeting</h4>
            <TimePicker onChange={setMeetingEnd} value={meetingEnd} />
          </div>
        </div>
        <br />
        <Button
          type="primary"
          block
          style={{ width: "100%" }}
          onClick={createMeeting}
        >
          Create Meeting
        </Button>
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
