/*----- constants -----*/

/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
var slotArray = ['imgs/cupcake.png', 'imgs/lemon.png', 'imgs/pineapple.png', 'imgs/cupcake.png', 'imgs/lemon.png', 'imgs/pineapple.png', 'imgs/cupcake.png', 'imgs/lemon.png', 'imgs/pineapple.png']


// const lookupABC = ['a', 'b', 'c'];

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

let scores, winner;

const timerEl = document.querySelector('#timer h2');
const scoreEl = document.querySelector('#score h2');
const slotEl = document.getElementById('#slotMachine');


document.querySelector('#startBtn').addEventListener('click', playSlot);
document.querySelector('#spinBtn').addEventListener('click', spin);

initialize();

function initialize() {
  scores = {
    p: 0,
  };

  winner = null;
  render();
}

function getRandomIdx() {
   return Math.floor((Math.random() * 10) + 1);
}

function spin(gameScore) {
    scores.p = lookupABC[getRandomIdx()];
    scores.p = lookupABC[getRandomIdx()];
    scores.p = lookupABC[getRandomIdx()];
    Winner = win();
    // scores[winner]++;
    render();
  }

function gameScore() {
    if (slotOne === slotTwo | slotTwo === slotThree) {
        scores = (p + 50) 
    } else if (slotOne === slotTwo && slotTwo === slotThree)
        scores = (p + 100)
            else if (time === 0 && score < 500)
                return "LOSER!";
}

function win() {
    if (gameScore === 500)
        return "Winner!";
}

function playSlot() {
    startTmr(startBtn);
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

function render() {
    // render scores
    scoreEl.textContent = scores.p;
   
    // render images 
    slotEl.style.backgroundImage = `url(${abc[scores.p].imgUrl})`
  
  }
  
