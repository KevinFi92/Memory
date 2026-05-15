import {getBoardSize, getCardsFlipped, getCurrentPlayer} from "./storage";
import {renderBoardTemp, renderCardTemp} from "./templates";
import {MemoryCard} from "./memory-card";

let cards = [
    "angular",
    "bootstrap",
    "cmd",
    "css",
    "django",
    "firebase",
    "git",
    "git_hub",
    "html",
    "js",
    "node",
    "python",
    "react",
    "saas",
    "sql",
    "ts",
    "vector",
    "vs_code"
];


function randomizeCards() {
    const pairs = getBoardSize() / 2;
    const selectCards = shuffle([...cards]).slice(0, pairs);

    return shuffle([...selectCards, ...selectCards])
}

function shuffle<T>(shuffeldCards: T[]): T[] {
    return shuffeldCards.sort(() => Math.random() - 0.5);
}


export function renderField() {
    let shuffledCards = randomizeCards();
    for (let i = 0; i < getBoardSize(); i++) {
        const card = new MemoryCard(shuffledCards[i], i);
        document.getElementById('field')!.appendChild(card.button);
    }
}


export function setPlayer() {
    let player = document.getElementById("CurrentPlayer") as HTMLImageElement;
    player.src = `/assets/images/themes/coding_vibes/icons/${getCurrentPlayer()}.png`;
}





export function initBoard() {
    renderBoardTemp();
    renderField();
    setPlayer();

}


// gamelogic = Card1 wird geflippt, card2 wird geflippt, card1 und card2 werden gematcht.
// Bei Match currentPlayer bekommt ein Punkt. Karten bleiben offen.
// Bei Missmatch currentPlayer wird gewechselt und Karten wieder geflippt.
// Sind alle Karten gematched, dann Gameserver => winning screen öffnet sich.