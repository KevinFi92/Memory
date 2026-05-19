import {
    getCardsFlipped, getFlippedCards, getCurrentPlayer, setPoints,
    resetCardsFlipped, resetFlippedCards, getPoints, setCurrentPlayer, addCardsMatched, getCardsMatched, getBoardSize
} from "./storage"


function setOnClick() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            checkMatch();
        })
    })
}


function updateCurrentPlayer() {
    let currentPlayer = document.getElementById("CurrentPlayer") as HTMLImageElement;
    if (getCurrentPlayer() === "blue_player") {
        currentPlayer.src = "/assets/images/themes/coding_vibes/icons/blue_player.png";
    } else {
        currentPlayer.src = "/assets/images/themes/coding_vibes/icons/orange_player.png";
    }

}


function togglePlayer() {
    if (getCurrentPlayer() === "blue_player") {
        setCurrentPlayer("orange_player");
    } else {
        setCurrentPlayer("blue_player");
    }
}


function updatePoints() {
    let bluePoints = document.getElementById("bluePoints") as HTMLParagraphElement;
    let orangePoints = document.getElementById("orangePoints") as HTMLParagraphElement;
    bluePoints.innerText = ``;
    orangePoints.innerText = ``;
    bluePoints.innerText = `${bluePoints.innerText} ${getPoints()[0]}`;
    orangePoints.innerText = `${orangePoints.innerText} ${getPoints()[1]}`;
}


function checkGameOver() {
    return getCardsMatched() === getBoardSize() / 2;
}


function checkMatch() {
    let flippedCards = getFlippedCards();
    let cardsFlipped = getCardsFlipped();
    let currentPlayer = getCurrentPlayer();
    if (cardsFlipped == 2) {
        if (flippedCards[0].imageName === flippedCards[1].imageName) {
            setPoints(currentPlayer);
            resetCardsFlipped();
            resetFlippedCards()
            updatePoints()
            addCardsMatched()
            checkGameOver()
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => card.unFlip());
            }, 1000)
            resetCardsFlipped();
            resetFlippedCards();
            togglePlayer();
            updateCurrentPlayer();
        }
    } else return
}


export function gameLogic() {
    setOnClick();
}





