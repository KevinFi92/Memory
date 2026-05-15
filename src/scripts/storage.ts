let boardSize : number = 16;
let currentPlayer : string = "blue_player";
let theme : string = "Coding Vibes theme";
let isFlipped :[boolean, boolean] = [false, false];
let FlippedCards :number = 0;


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

export function setIsFlipped(index: number, value: boolean) {
    isFlipped[index] = value;
}