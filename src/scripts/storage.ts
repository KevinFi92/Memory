import {MemoryCard} from "./memory-card";

let boardSize : number = 16;
let firstPlayer : string = "blue_player";
let currentPlayer : string = firstPlayer;
let theme : string = "Coding Vibes theme";
let flippedCards:MemoryCard[] = [];
let cardsFlipped :number = 0;
let cardsMatched : number = 0;
let bluePoints : number = 0;
let orangePoints : number = 0;



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
    return currentPlayer;
}

export function setCurrentPlayer(player: string) {
    currentPlayer = player;
}


export function setCardsFlipped(){
    cardsFlipped++;
}

export function addCardsMatched(){
    cardsMatched++;
}


export function getCardsMatched(){
    return cardsMatched;
}


export function getCardsFlipped(){
    return cardsFlipped;
}


export function resetCardsFlipped(){
    cardsFlipped = 0;
}


export function setFlippedCards(cardName: MemoryCard)
{
  flippedCards.push(cardName);

}


export function getFlippedCards(){
    return flippedCards;
}

export function resetFlippedCards(){
    flippedCards = [];
}

export function getFirstPlayer() {return firstPlayer}


export function setPoints(player: string){
    if (player === "blue_player") {
        bluePoints++;
    }
    if (player === "orange_player") {
        orangePoints++;
    }
}


export function getPoints() {
    return [bluePoints, orangePoints];
}