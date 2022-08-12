// Start variables
// board = the game board ; 
// playerTurn = 0(1st player) or 1(1st player)
// symbols = O =(1st player)  X =(1st player)

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function for each player move

function handleMove(position) {
    if (gameOver) {
        return;
    }

    // Ensure that the SQM is empty V
    if (board[position] == '') {
        board[position] = symbols[playerTurn]

        gameOver = winner();

        if (gameOver == false) {
            playerTurn = (playerTurn == 0) ? 1 : 0;

        }
    }
    return gameOver;
}

function winner() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        if (board[pos0] == board[pos1] &&
            board[pos0] == board[pos2] &&
            board[pos0] != '') {
            return true
        }
    }
    return false
}