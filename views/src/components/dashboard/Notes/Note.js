import React from "react";

import "./Note.css";

import trashBin from "../../../assets/images/bin.png";

const Note = (props) => {
  let timer;

  const inputHandler = (e) => {
    let name = e.target.attributes.name.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (name === "title") {
        let title = e.target.innerText;
        let content =
          e.target.parentNode.parentNode.children[1].children[0].innerText;
        props.updateNote(props.id, title, content);
      } else {
        let title =
          e.target.parentNode.parentNode.children[0].children[0].innerText;
        let content = e.target.innerText;
        props.updateNote(props.id, title, content);
      }
      console.log('updated?')
    }, 400);
  };
  return (
    <div className="flex__column">
      <div className="flex_row space_between noteHeader">
        <h3
          className="h3__title"
          contentEditable="true"
          onInput={inputHandler}
          name="title"
        >
          {props.noteTitle}
        </h3>
        <img
          onClick={() => props.removeNote(props.id)}
          src={trashBin}
          alt="Delete Button"
          style={{ height: "20px" }}
        />
      </div>
      <div className="noteBody">
        <p name="content" contentEditable="true" onInput={inputHandler}>
          {props.noteContent}
        </p>
      </div>
    </div>
  );
};

export default Note;
