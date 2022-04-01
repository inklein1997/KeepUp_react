import React from 'react';

import './TrelloBoard.css'
import Settingsbar from './SettingsBar';
import List from './List'

const Trelloboard = () => {
    return (
        <div className="flex__column trelloBoard" style={{gap:"16px"}}>
            <Settingsbar />
            <div className="board flex_row" style={{gap:"16px"}}>
                <List />
                <List />
            </div>
        </div>
    );
}

export default Trelloboard;
