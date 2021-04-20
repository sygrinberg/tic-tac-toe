import React from 'react';
import './Footer.scss';

export default ({ wins = {}, reset}) => {
    return (
        <div className="footer">
            <div className="footer-score">
                <div className="footer-score-player player-1">
                    <span>Player 1: </span>
                    <span>{wins[1]}</span>
                </div>
                <div className="footer-score-player">
                    <span>Player 2: </span>
                    <span>{wins[2]}</span>
                </div>
            </div>
            <div className="footer-reset" onClick={reset}>
                Reset
            </div>
        </div>
    );
}