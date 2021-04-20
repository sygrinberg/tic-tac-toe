export const checkWin = (boardState, player) => {
    const str = player.toString().repeat(3);
    if (boardState[0].join('') === str
        || boardState[1].join('') === str
        || boardState[2].join('') === str
    ) return true;

    for (let i = 0; i < 3; i++) {
        if (boardState[0][i] === player
            && boardState[1][i] === player
            && boardState[2][i] === player
        ) return true;
    }
    
    if (boardState[1][1] === player && (
        (boardState[0][0] === player && boardState[2][2] === player)
        || (boardState[0][2] === player && boardState[2][0] === player)
    )) return true;

    return false;
};

export const isFull = boardState => !boardState.map(row => row.join('')).join('').includes('0');

export const getUpdatedBoard = (boardState, rowIndex, cellIndex, activePlayer) => {
    return boardState.map((row, currentRowIndex) => {
        const rowCopy = [...row];
        if (currentRowIndex === rowIndex) {
          rowCopy[cellIndex] = activePlayer;
        } 
        return rowCopy;
    });
}; 

export const newBoard = () => [[0, 0, 0], [0, 0, 0], [0, 0, 0]];