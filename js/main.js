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



document.querySelector('button').addEventListener('click', playSlot);

/*----- functions -----*/
function playSlot() {
    startTmr(spin);
}

function startTmr(cb) {
    let time = 10;
    timerEl.textContent = time;
    let timerId = setInterval(function() {
        time--;

    }, 3000);
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