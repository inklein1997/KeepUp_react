import React from "react";

import "./Note.css";

import trashBin from '../../../assets/images/bin.png'

const Note = () => {
  return (
    <div className="flex__column">
      <div className="flex_row space_between noteHeader">
        <h3 className="h3__title" contentEditable="true">Note Title</h3>
        <img src={trashBin} alt="Delete Button" style={{height:"20px"}} />
      </div>
      <div className="noteBody">
          <p contentEditable="true">This is a test note</p>
      </div>
    </div>
  );
};

export default Note;
