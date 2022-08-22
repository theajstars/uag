import React, { useState } from "react";
import { TimeLineDot } from "./MoreButton";

import { Timeline, Modal, Input, Calendar, Button, message } from "antd";
import Todos from "../Assets/JSON/TodoList.json";
import { getDateWithoutDay, getDaysBetween } from "./Modules";
export default function TodoList() {
  const [myTodos, setMyTodos] = useState(Todos.todos);
  const [isModalVisible, setModalVisible] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoSubHead, setTodoSubHead] = useState("");
  const [todoDate, setTodoDate] = useState("");

  function onTodoDateChange(value) {
    const date = value.format("YYYY-MM-DD");
    console.log(date);
    setTodoDate(getDateWithoutDay(date));
  }
  function createTodo() {
    if (todoDate === "" || todoTitle === "" || todoSubHead === "") {
      message.info("Please fill out todo details");
    } else {
      var date = new Date(todoDate);

      //Create Todo
      const todo = {
        title: todoTitle,
        subtext: todoSubHead,
        due: Date.parse(date),
      };
      console.log(todo);
      setMyTodos([...myTodos, todo]);
      message.success("Todo created!");
      setTodoTitle("");
      setTodoSubHead("");
      setModalVisible(false);
    }
  }
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
        {myTodos.slice(0, 2).map((todo) => {
          const today = Date.now();
          const due = getDaysBetween(todo.due, today);
          return (
            <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
              <div className="flex-row todo-row">
                <div className="flex-column">
                  <div className="card-text card-text-large">{todo.title}</div>
                  <div className="card-text card-text-large faint-text">
                    {todo.subtext}
                  </div>
                </div>
                <div className="todo-details">
                  <span className="card-text card-text-smaller">
                    Due date:{" "}
                    <span
                      className={`${due < 24 ? "text-red" : "text-orange"}`}
                    >
                      {due < 24 && <>{due}h</>}
                      {due >= 24 && <>{Math.floor(due / 24)}d</>}
                    </span>
                  </span>
                </div>
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>
      <Modal
        title="My Todos"
        visible={isModalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        {myTodos.map((todo) => {
          const today = Date.now();
          const due = getDaysBetween(todo.due, today);
          return (
            <Timeline.Item color="rgb(184, 55, 55)" dot={<TimeLineDot />}>
              <div className="flex-row todo-row">
                <div className="flex-column">
                  <div className="card-text card-text-large">{todo.title}</div>
                  <div className="card-text card-text-large faint-text">
                    {todo.subtext}
                  </div>
                </div>
                <div className="todo-details">
                  <span className="card-text card-text-smaller">
                    Due date:{" "}
                    <span
                      className={`${due < 24 ? "text-red" : "text-orange"}`}
                    >
                      {due < 24 && <>{due}h</>}
                      {due >= 24 && <>{Math.floor(due / 24)}d</>}
                    </span>
                  </span>
                </div>
              </div>
            </Timeline.Item>
          );
        })}
        <br />
        <h4>New Todo</h4>
        <Input
          placeholder="Todo Title"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <Input
          placeholder="Todo About"
          value={todoSubHead}
          onChange={(e) => {
            setTodoSubHead(e.target.value);
          }}
        />
        <br />
        <br />
        <h4>Todo Date</h4>
        <Calendar onChange={onTodoDateChange} />
        <br />
        <br />

        <br />
        <Button
          type="primary"
          block
          style={{ width: "100%" }}
          onClick={createTodo}
        >
          Create Todo
        </Button>
      </Modal>
      <div className="more-button-container">
        <button className="more-button" onClick={() => setModalVisible(true)}>
          More
        </button>
      </div>
    </div>
  );
}
