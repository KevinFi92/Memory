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

    Match() {
        this.matched = true;
    }

    noMatch() {
        this.matched = false;
    }
}

