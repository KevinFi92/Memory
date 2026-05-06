import './styles/style.scss'


const gameOption = document.querySelectorAll(".game-option")

gameOption.forEach(option => {
    option.addEventListener("click", () => {
        const SelectedOption = option.getAttribute("id");
        if (SelectedOption) {
            setOption(SelectedOption);
        }

    })
})


function setPreview(theme: string) {
    let themeImg = document.getElementById("preview-img") as HTMLImageElement;
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

