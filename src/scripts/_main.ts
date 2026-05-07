import { initSettings } from "./settings";
import { initBoard } from "./board";
import { initLandingPage } from "./landing-page";



document.addEventListener("DOMContentLoaded", () => {
    initBoard();
    initSettings();
    initLandingPage();
});