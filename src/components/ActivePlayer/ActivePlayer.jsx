import React from 'react';
import Switch from '@material-ui/core/Switch';

export default ({ activePlayer}) => {
    return (
        <div className="active-player">
            <span>Player 1</span>
            <Switch checked={activePlayer === 2} disabled />
            <span>Player 2</span>
        </div>
    );
}