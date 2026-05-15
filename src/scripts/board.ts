import {getBoardSize, getCurrentPlayer} from "./storage";
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

function createCardElement(card: MemoryCard): HTMLButtonElement {
    const button = document.createElement("button");
    button.classList.add("card");
    button.innerHTML = renderCardTemp(card);
    return button;
}


export function renderField() {
    let shuffeldCards = randomizeCards();
    for (let i = 0; i < getBoardSize(); i++) {
        document.getElementById('field')!.appendChild(createCardElement(new MemoryCard(shuffeldCards[i])));
    }
}


export function setPlayer() {
    let player = document.getElementById("CurrentPlayer") as HTMLImageElement;
    player.src = `/assets/images/themes/coding_vibes/icons/${getCurrentPlayer()}.png`;
}


export function flipCard() {
    const fieldRef = document.getElementById("field") as HTMLElement;
    if (fieldRef) {
        fieldRef.addEventListener("click", e => {
            const card = (e.target as HTMLElement).closest(".card") as HTMLButtonElement;
            if (card) {
                card.classList.toggle("is-flipped");
            }
        })
    }
}


export function initBoard() {
    renderBoardTemp();
    renderField();
    setPlayer();
    flipCard();
}


// gamelogic = Card1 wird geflipped, card2 wird geflipped, card1 und card2 werden gematched
// bei Match currentPlayer bekommt einen Punkt Karten bleiben offen
// bei missmatch currentPlayer wird gewechselt und Karten wieder geflipped
// sind alle Karten gematched dann Gameover => winning screen öffnet sich