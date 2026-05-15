import {getFirstPlayer, getCardsFlipped, getFlippedCards, setFirstPlayer, getCurrentPlayer} from "./storage"



function checkMatch() {
    let flippedCards = getFlippedCards();
    if (flippedCards[0] === flippedCards[1]){
        let currentPlayer = getCurrentPlayer();
    }
}

//Was muss das Game wissen und welche Infos rausgeben?
//Welcher Spieler ist dran
//Wann wurden alle Karten gematched? Wer hat gewonnen?
//Wurden Karten gematched? Wenn ja die Punkte verteilen, wenn nein richtige Karten umdrehen
//


