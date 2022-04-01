import React from "react";

import "./List.css";

import binImg from "../../../assets/images/bin-white.png";
import Task from "./Task";

const List = () => {
  return (
    <div className="flex__column list" draggable="true">
      <div className="flex_row space_between">
        <h3 className="h3__title--small">To Do</h3>
        <img src={binImg} />
      </div>
      <div className="taskContainer">
        <Task />
        <Task />
        <Task />
      </div>
      <button className="btn__addTask">
        <strong>+</strong> Add task
      </button>
    </div>
  );
};

export default List;
