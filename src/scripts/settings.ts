import {setBoardSize, setCurrentPlayer} from "./storage";
import {initBoard} from "./board";


function setPreview(theme: string) {
    let themeImg = document.getElementById("preview-img") as HTMLImageElement;
    if (!themeImg) return;
    if (theme.includes("Foods theme")) {
        themeImg.src = "./public/assets/images/themes/foods/preview.png";
    } else {
        themeImg.src = "./public/assets/images/themes/coding_vibes/preview.png";
    }
}

function setOption(selectedOption: string) {
    if (selectedOption.includes("theme")) {
        document.getElementById("selected-theme")!.innerText = `${selectedOption}`;
        setPreview(selectedOption);
    }
    if (selectedOption.includes("Player")) {
        document.getElementById("selected-player")!.innerText = `${selectedOption}`;
    }
    if (selectedOption.includes("cards")) {
        document.getElementById("selected-size")!.innerText = `${selectedOption}`;
    }
}

function initRadioBtn() {
    const boardSizeRadios = document.querySelectorAll(
        'input[name="size"]') as NodeListOf<HTMLInputElement>;
    boardSizeRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            setBoardSize(Number(radio.value));
        });
    });

    const playerRadios = document.querySelectorAll(
        'input[name="player"]') as NodeListOf<HTMLInputElement>;
    playerRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            setCurrentPlayer(String(radio.value));
        });
    });

    const gameOption = document.querySelectorAll(".game-option")
    gameOption.forEach(option => {
        option.addEventListener("click", () => {
            const SelectedOption = option.getAttribute("id");
            if (SelectedOption) {
                setOption(SelectedOption);
            }
        })
    })
}

function initButton() {
    const startButton = document.getElementById('start-button') as HTMLButtonElement;
    startButton?.addEventListener("click", initBoard)


}

export function initSettings() {
    setPreview("Coding Vibes theme");
    setOption("Blue Player");
    initButton();
    initRadioBtn()
}