import React from 'react';

import './Checkmark.css'

const Checkmark = () => {
    return (
      <div class="checkmark">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0, 0, 100, 100"
          id="checkmark"
        >
          <g transform="">
            <circle
              class="path"
              fill="none"
              stroke="#7DB0D5"
              stroke-width="4"
              stroke-miterlimit="10"
              cx="50"
              cy="50"
              r="44"
            />
            <circle
              class="fill"
              fill="none"
              stroke="#7DB0D5"
              stroke-width="4"
              stroke-miterlimit="10"
              cx="50"
              cy="50"
              r="44"
            />
            <polyline
              class="check"
              fill="none"
              stroke="#7DB0D5"
              stroke-width="8"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="70,35 45,65 30,52  "
            />
          </g>
        </svg>
      </div>
    );
}

export default Checkmark;
