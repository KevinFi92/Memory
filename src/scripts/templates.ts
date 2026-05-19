import { MemoryCard } from "./memory-card";


let content = document.getElementById('content')!;


export function renderSettings() {

    content.innerHTML = '';
    content.innerHTML = `
<section class="settings">
    <div class="settings-content">
    <div class="settings-selection" >
    <h1>Settings</h1>

    <ul>
    <h2><img src="/assets/images/icons/palette.png">Game themes</h2>
    <li>
    <label>
        <input type="radio" class="game-option" name="theme" id="Gaming theme" checked> Gaming theme
    </label>
    </li>
    <li>
    <label>
        <input type="radio" class="game-option" name="theme" id="Foods theme" > Foods theme
    </label>
    </li>
    </ul>

    <ul>
    <h2><img src="/assets/images/icons/chess_pawn.png">Choose player</h2>
    <li>
    <label>
        <input type="radio" value="blue_player" class="game-option" name="player" id="Blue Player" checked> blue
    </label>
    </li>
    <li>
    <label>
        <input type="radio" value="orange_player" class="game-option" name="player" id="Orange Player" > orange
    </label>
    </li>
    </ul>

    <ul>
    <h2><img src="/assets/images/icons/style.png">Board size</h2>
    <li>
    <label>
        <input type="radio" class="game-option" value="16" name="size" id="16 cards" checked> 16 cards
    </label>
    </li>
    <li>
    <label>
        <input type="radio" class="game-option" value="24" name="size" id="24 cards" > 24 cards
    </label>
    </li>
    <li>
    <label>
        <input type="radio" class="game-option" value="36" name="size" id="36 cards" > 36 cards
    </label>
    </li>
    </ul>
    </div>
    <div class="overview" >
    <div>
        <div class="">
    <img id="preview-img" class="preview-img" src="/assets/images/themes/coding_vibes/icons/preview.png">
        </div>
        <div class="game-settings">
    <p id="selected-theme">Game theme</p>
    <p id="selected-player">Blue Player</p>
    <p id="selected-size">16 Cards</p>
    <button id="start-button"  class="btn">start</button>
        </div>
        </div>
        </div>
        </div>
        </section>`
}


export function renderBoardTemp(points:number[]) {
    content.innerHTML = '';
    content.innerHTML = `<section class="BoardContent">
    <header>
        <div class="points"><p><img>Blue:<p id="bluePoints">${points[0]}</p></p><p><img>Orange:<p id="orangePoints">${points[1]}</p></p></div>
        <div><p>Current player:<img id="CurrentPlayer" src="/assets/images/themes/coding_vibes/icons/blue_player.png"></p></div>
        <button><img>Exit game</button>
    </header>
    <section id="">
        <div id="field" class="board">

        </div>
    </section>
</section>`
}


export function renderCardTemp(card:MemoryCard) {
  return `<div class="card__inner">
    <img class="card__face"  src="/assets/images/themes/coding_vibes/cards/back_card.png">
    <img class="card__face card__face--back" src="/assets/images/themes/coding_vibes/cards/${card.imageName}_card.png">
        </div>`
}


export function renderLandingPage() {
    content.innerHTML = '';
    content.innerHTML = `
    <section class="landing-page">
    <img class="logo" src="/assets/images/controller_big.png" alt="">
        <div class="landing-page-content">
            <h2>It´s play time.</h2>
            <h1>Ready to play?</h1>
            <div class="btn-container">
                <button class="btn btn--play"><img src="/assets/images/icons/controller.png">Play<img src="/assets/images/icons/arrow.png"></button>
            </div>            
        </div>
    </section>
    `
}

