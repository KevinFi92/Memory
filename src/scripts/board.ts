import {boardSize} from "./storage";

renderBoard();

export function renderBoard() {
for (let i = 0; i < boardSize; i++) {
    document.getElementById('field')!.insertAdjacentHTML('beforeend', '' +
        '           <button class="card">\n' +
        '                <div class="card__inner">\n' +
        '                    <div class="card__face"></div>\n' +
        '                    <div class="card__face card__face--back"></div>\n' +
        '                </div>\n' +
        '            </button>')
}
}

function flipCard() {
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
    flipCard();

}