import { getCardsFlipped, setCardsFlipped, setFlippedCards } from "./storage";
import { renderCardTemp } from "./templates";

export class MemoryCard {
    imageName: string;
    id: number;
    flipped: boolean;
    matched: boolean;
    button: HTMLButtonElement = document.getElementById("card") as HTMLButtonElement;

    constructor(imageName: string, index: number) {
        this.imageName = imageName;
        this.id = index;
        this.flipped = false;
        this.matched = false;
        this.createCard();
    }

    createCard() {
        this.button = document.createElement("button");
        this.button.classList.add("card");
        this.button.innerHTML = renderCardTemp(this);
        this.button.addEventListener("click", () => {
            this.flip();
        })
    }


    flipCardAnimation() {
        this.button.classList.add("is-flipped");
        this.flipped = true;

    }


    flip() {
        if (getCardsFlipped() === 2) return;
        else if (!this.flipped) {
            this.flipCardAnimation()
            setFlippedCards(this);
            setCardsFlipped();
        }
    }


    unFlip() {
        this.flipped = false;
        this.button.classList.remove("is-flipped");

    }
}

