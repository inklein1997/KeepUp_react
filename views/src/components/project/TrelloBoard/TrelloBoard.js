import React from 'react';

import './TrelloBoard.css'
import Settingsbar from './SettingsBar';

const Trelloboard = () => {
    return (
        <div className="flex__column trelloBoard">
            <Settingsbar />
            <div className="board">

            </div>
        </div>
    );
}

export default Trelloboard;
