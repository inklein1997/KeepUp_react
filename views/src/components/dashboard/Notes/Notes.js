import React, { useEffect, useState } from "react";

import "./Notes.css";
import Card from "../../UI/Card";
import CheckMark from "../../UI/Checkmark";
import Note from "./Note";

import pencilImage from "../../../assets/images/pencil_icon.png";

import UseHttp from "../../../utils/API";

const Notes = () => {
  const [allNotes, setAllNotes] = useState([]);

  const addNoteToState = (data) => {
    console.log(data);
    setAllNotes([...allNotes, data]);
  };

  let {
    isLoading1,
    error,
    sendRequest: createNote,
  } = UseHttp(
    {
      url: "api/notes/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        noteTitle: "Click to edit",
        noteContent: "Click to edit",
        userId: 1,
      },
    },
    addNoteToState
  );

  let {
    isLoading3,
    error3,
    sendRequest: createNote,
  } = UseHttp(
    {
      url: "api/notes/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        noteTitle: "Click to edit",
        noteContent: "Click to edit",
        userId: 1,
      },
    },
    addNoteToState
  );

  let {
    loading,
    err,
    sendRequest: getNotes,
  } = UseHttp(
    {
      url: "api/notes/",
    },
    setAllNotes
  );

  const deleteNote = (id) => {
    let newNotesArr = allNotes.filter((note) => note.id != id);
    setAllNotes(newNotesArr);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Card className="Card__Notes flex__column">
      <div className="flex_row space_between">
        <h2 className="h2__title">Personal Note Taker</h2>
        <div className="flex_row space_between" style={{ gap: "10px" }}>
          <CheckMark />
          <img src={pencilImage} onClick={createNote} className="img__pencil" />
        </div>
      </div>
      <div id="notesContainer" className="flex__column">
        {allNotes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            noteTitle={note.note_title}
            noteContent={note.note_content}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </Card>
  );
};

export default Notes;
