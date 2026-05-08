export function renderSettings(){

}


export function renderBoardTemp(){
    let content = document.getElementById('content')!;
    content.innerHTML = '';
    content.innerHTML = `<section class="BoardContent">
    <header>
        <div class="points"><p><img>Blue</p><p><img>Orange</p></div>
        <div><p>Current player:<img id="CurrentPlayer" src="/assets/images/themes/coding_vibes/blue_player.png"></p></div>
        <button><img>Exit game</button>
    </header>
    <section id="">
        <div id="field" class="board">

        </div>
    </section>
</section>`
}


export function renderLandingPage(){

}

