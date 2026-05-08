import { getBoardSize, getCurrentPlayer } from "./storage";
import { renderBoardTemp } from "./templates";


export function renderField() {
for (let i = 0; i < getBoardSize(); i++) {
    document.getElementById('field')!.insertAdjacentHTML('beforeend', '' +
        '           <button class="card">\n' +
        '                <div class="card__inner">\n' +
        '                    <div class="card__face"></div>\n' +
        '                    <div class="card__face card__face--back"></div>\n' +
        '                </div>\n' +
        '            </button>')
}
}


export function setPlayer() {
    let player = document.getElementById("CurrentPlayer") as HTMLImageElement;
    player.src = `/assets/images/themes/coding_vibes/${getCurrentPlayer()}.png`;
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

