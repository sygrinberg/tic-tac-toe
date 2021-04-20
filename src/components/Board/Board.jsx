import React from 'react';
import Switch from '@material-ui/core/Switch';
import './Board.scss';

const cellClassnames = {
    0: '',
    1: 'x-player',
    2: 'o-player'
};

export default ({ boardState = [], activePlayer, onPlayerClick }) => {
    console.log(boardState);
    return (
        <div className="board">
            {boardState.map((row = [], rowIndex) => (
                <div className="board-row">
                    {row.map((cellValue, cellIndex) => (
                        <div 
                            className={`board-row-cell ${cellClassnames[cellValue]}`}
                            onClick={!cellValue && (() => onPlayerClick(rowIndex, cellIndex))}
                        >
                            <div className="inner"></div>
                        </div>        
                    ))}
                </div>    
            ))}
        </div>
    );
}