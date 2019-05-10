
const lookupABC = ['a', 'b', 'c'];

const abc = {
    a: {
        imgUrl: 'imgs/cupcake.png'
    },
    b: {
        imgUrl: 'imgs/lemon.png'
    },
    c: {
        imgUrl: 'imgs/pineapple.png'
    }

};

function random(lookupABC) {
    if (gameScore === "Winner!") return;
    var s = "";
    for (var i = 0; i < lookupABC.length; i++) {
        s += "" + `<img src="${abc[lookupABC[spinSlot()]].imgUrl}">`;
    }
    document.getElementById("slotOne").innerHTML = s;
};

function spinSlot() {
    if (gameScore === "Winner!") return;
    return Math.floor(Math.random() * lookupABC.length)
};

let scores, winner;

const scoreEl = document.querySelector('h2');
const slotEl = document.querySelector('#slotMachine div');
const spnBtn = document.querySelector("button").addEventListener('click', handleClick);

function handleClick(evt) {
    if (gameScore === "Winner!") return;
    gameScoreboard()
    win()
    render();
}

var gameScore = 0;

function gameScoreboard() {
    if (('imgs/cupcake.png' === 'imgs/cupcake.png') || ('imgs/lemon.png' === 'imgs/lemon.png') || ('imgs/pineapple.png' === 'imgs/pineapple.png')) {
        return gameScore = (gameScore + 50);
    } else if ('imgs/cupcake.png' === 'imgs/cupcake.png' && 'imgs/cupcake.png' || 'imgs/lemon.png' === 'imgs/lemon.png' && 'imgs/lemon.png' || 'imgs/pineapple.png' === 'imgs/pineapple.png' && 'imgs/pineapple.png') {
        gameScore = gameScore + 100;
    }
    else if (time === 0 && score < 500) {
        return "LOSER!";
    }
    return gameScore;

}

function win() {
    if (gameScore >= 1000) { gameScore = "Winner!" };
}




function render() {
    // render scores
    // scoreEl.textContent = gameScore;
    scoreEl.textContent = gameScore


}

