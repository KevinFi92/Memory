import { setIsFlipped  } from "./storage";
import { renderCardTemp } from "./templates";

export class MemoryCard {


    imageName: string;
    flipped: boolean;
    matched: boolean;
    button: HTMLButtonElement = document.getElementById("card") as HTMLButtonElement;

    constructor(imageName: string) {
        this.imageName = imageName;
        this.flipped = false;
        this.matched = false;
        this.button = document.createElement("button");
        this.button.classList.add("card");
        this.button.innerHTML = renderCardTemp(this);
        this.button.addEventListener("click", () => {
            this.flip();
        })
    }



    flip() {
        this.flipped = true;
        console.log("ich wurde geflipped")
    }
    unFlip() {
        if (this.matched) return;
        this.flipped = false;
    }

    checkMatch(card: MemoryCard) {
        return this.imageName === card.imageName;
    }

    match() {
        if (!this.matched) return;
        this.matched = true;
    }



}

