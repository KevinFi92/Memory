import {getBoardSize, getCardsFlipped, getCurrentPlayer, getPoints} from "./storage";
import {renderBoardTemp, renderCardTemp} from "./templates";
import {MemoryCard} from "./memory-card";
import {gameLogic} from "./game";

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
let points = getPoints();


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
    renderBoardTemp(points);
    renderField();
    setPlayer();
    gameLogic();
}



