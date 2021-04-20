import { useState, useCallback } from 'react';
import logo from './logo.svg';
// import './App.css';
import './app.scss';
import ActivePlayer from './components/ActivePlayer/ActivePlayer';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import { checkWin, isFull, newBoard, getUpdatedBoard } from './Utils/board';

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [boardState, setBoardState] = useState(newBoard());
  const [wins, setWins] = useState({ 1: 0, 2: 0 });

  const onPlayerClick = useCallback((rowIndex, cellIndex) => {
    const newBoardState = getUpdatedBoard(boardState, rowIndex, cellIndex, activePlayer);
    const isWin = checkWin(newBoardState, activePlayer);
    const full = isFull(newBoardState);
    if (isWin || full) {
      const activePlayerWins = wins[activePlayer];
      setWins({
        ...wins, 
        [activePlayer]: isWin ? activePlayerWins + 1 : activePlayerWins
      });
      setBoardState(newBoard());
    } else {
      setBoardState(newBoardState);
    }
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  }, [activePlayer]);

  const reset = useCallback(() => {
    setBoardState(newBoard());
    setWins({ 1: 0, 2: 0 });
  }, []);

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div>
        <ActivePlayer activePlayer={activePlayer} />
        <Board onPlayerClick={onPlayerClick} activePlayer={activePlayer} boardState={boardState}/>
        <Footer wins={wins} reset={reset} />
      </div>
    </div>
  );
}

export default App;
