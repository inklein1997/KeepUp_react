import React, {useEffect} from "react";

import "./Task.css";

let list_items = document.querySelectorAll(".p__task");
let lists = document.querySelectorAll(".list");

const Task = () => {
  return (
    <p
      draggable="true"
      className="p__task"
    >
      Click to enter text
    </p>
  );
};

export default Task;
