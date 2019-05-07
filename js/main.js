/*----- constants -----*/

/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
const lookupABC = ['a', 'b', 'c'];
const abc = {
    a: {
        imgURl: 'imgs/cupcake.png'
    },
    b: {
        imgURl: 'imgs/lemon.png'
    },
    c: {
        imgURl: 'imgs/pineapple.png'
    }
};

let scores, results, winner;

const timerEl = document.querySelector('#timer h2');
const scoreEl = document.querySelector('#score h2');

document.querySelector('button').addEventListener('click', playSlot);

/*----- functions -----*/
function playSlot() {
    startTmr(spin);
}

function startTmr(cb) {
    let time = 100;
    timerEl.textContent = time;
    let timerId = setInterval(function() {
        time--;
        if (time) {
            timerEl.textContent = time;
        }else {
            clearInterval(timerId);
            timerEl.textContent = '';
            cb();
        }

    }, 1000);
}

//Needs winner
function spin() {
   results.s = lookupABC[getRandomIdx()]; 
}

// function winner() {
//     return results.s 
// }

function render() {
    //render score
    return results.s;
    //render an image
    sResultEl.style.backgroundImage = `url(${abc[results.s].imgUrl})`;
}

function getRandomIdx() {
    return Math.floor(Math.random() * 3);
}