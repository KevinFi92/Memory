let boardSize : number = 16;
let currentPlayer : string = "blue_player";
let theme : string = "Coding Vibes theme";


export function setBoardSize(size : number) {
    boardSize = size;
}


export function getBoardSize() {
    return boardSize
}


export function setCurrentPlayer(player : string) {
    currentPlayer = player;
}


export function getCurrentPlayer() {
    return currentPlayer;
}