import React from 'react';

import './Checkmark.css'

const Checkmark = () => {
    return (
      <div className="checkmark">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0, 0, 100, 100"
          id="checkmark"
        >
          <g transform="">
            <circle
              className="path"
              fill="none"
              stroke="#7DB0D5"
              strokeWidth="4"
              strokeMiterlimit="10"
              cx="50"
              cy="50"
              r="44"
            />
            <circle
              className="fill"
              fill="none"
              stroke="#7DB0D5"
              strokeWidth="4"
              strokeMiterlimit="10"
              cx="50"
              cy="50"
              r="44"
            />
            <polyline
              className="check"
              fill="none"
              stroke="#7DB0D5"
              strokeWidth="8"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="70,35 45,65 30,52  "
            />
          </g>
        </svg>
      </div>
    );
}

export default Checkmark;
