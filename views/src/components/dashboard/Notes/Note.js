import React from "react";

import "./Note.css";

import trashBin from '../../../assets/images/bin.png'

const Note = (props) => {
  return (
    <div className="flex__column">
      <div className="flex_row space_between noteHeader">
        <h3 className="h3__title">{props.noteTitle}</h3>
        <img onClick={() => props.deleteNote(props.id)} src={trashBin} alt="Delete Button" style={{height:"20px"}} />
      </div>
      <div className="noteBody">
          <p>{props.noteContent}</p>
      </div>
    </div>
  );
};

export default Note;
