import { setIsFlipped  } from "./storage";

export class MemoryCard {


    imageName: string;
    flipped: boolean;
    matched: boolean;

    constructor(imageName: string) {
        this.imageName = imageName;
        this.flipped = false;
        this.matched = false;

    }


    Flip() {
        this.flipped = true;
    }
    UnFlip() {
        if (this.matched) return;
        this.flipped = false;
    }

    checkMatch(card: MemoryCard) {
        return this.imageName === card.imageName;
    }

    Match() {
        if (!this.matched) return;
        this.matched = true;
    }


}

