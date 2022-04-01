import React from "react";

import "./SettingsBar.css";
import CheckMark from "../../UI/Checkmark";

import plusImg from '../../../assets/images/plus.png'

const Settingsbar = () => {
  return (
    <div className="flex_row space_between" style={{ width: "100%" }}>
      <h2 className="h1__title--small">Project Name</h2>
      <div className="flex_row align-center">
        <CheckMark />
        <div className="vr" style={{ margin: "0 12px 0 10px" }} />
        <div class="flex_row align-center" id="dragTaskToggleDiv">
          <div class="flex__column">
            <label id="moveableTasksH6" for="draggableToggle">
              moveable tasks
            </label>
            <label id="moveableListsH6" for="draggableToggle">
              moveable lists
            </label>
          </div>
          <input type="checkbox" id="draggableToggle" />
        </div>

        <div className="vr" />

        <div class="flex_row align-center" id="editTextToggleDiv">
          <input type="checkbox" id="editTextToggle" />
          <div class="flex__column">
            <label id="editTextOn" for="editTextToggle">
              edit text ON
            </label>
            <label id="editTextOff" for="editTextToggle">
              edit text OFF
            </label>
          </div>
        </div>

        <div className="vr" style={{ margin: "0 4px 0 10px" }} />

        <div className="flex_row align-center Btn__addList">
          <img src={plusImg} alt="Add new list button" />
          <p>add new list</p>
        </div>
      </div>
    </div>
  );
};

export default Settingsbar;
