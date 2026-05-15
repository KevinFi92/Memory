let boardSize : number = 16;
let firstPlayer : string = "blue_player";
let currentPlayer : string ="";
let theme : string = "Coding Vibes theme";
let flippedCards:string[] = [];
let cardsFlipped :number = 0;



export function setBoardSize(size : number) {
    boardSize = size;
}


export function getBoardSize() {
    return boardSize
}


export function setFirstPlayer(player : string) {
    firstPlayer = player;
}


export function getCurrentPlayer() {
    return firstPlayer;
}


export function setCardsFlipped(){
    cardsFlipped++;
    console.log(cardsFlipped, flippedCards)
}

export function getCardsFlipped(){
    return cardsFlipped;
}


export function setFlippedCards(cardName:string)
{
  flippedCards.push(cardName);

}


export function getFlippedCards(){
    return flippedCards;
}



export function getFirstPlayer() {return firstPlayer}