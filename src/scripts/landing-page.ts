import {renderLandingPage, renderSettings} from "./templates";
import {initSettings} from "./settings";

function init (){
    const playButton = document.querySelector(".btn--play") as HTMLButtonElement;
    playButton?.addEventListener("click", () => {
        renderSettings();
        initSettings();
    });
}


export function initLandingPage() {
    renderLandingPage();
    init();
}