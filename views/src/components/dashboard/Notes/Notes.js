import React from 'react';

import './Notes.css'
import Card from '../../UI/Card'
import CheckMark from '../../UI/Checkmark'
import Note from './Note'

import pencilImage from '../../../assets/images/pencil_icon.png'

const Notes = () => {
    return (
      <Card className="Card__Notes flex__column">
        <div className="flex_row space_between">
          <h2 className="h2__title">Personal Note Taker</h2>
          <div className="flex_row space_between" style={{ gap: "10px" }}>
            <CheckMark />
            <img src={pencilImage} className="img__pencil" />
          </div>
        </div>
        <div id="notesContainer" className="flex__column">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />

        </div>
      </Card>
    );
}

export default Notes;
