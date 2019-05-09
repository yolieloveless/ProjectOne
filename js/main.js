/*----- constants -----*/

/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
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

function random (lookupABC) {
    var s = "";
    for (var i = 0; i < lookupABC.length; i++) {
        s += "" + `<img src="${abc[lookupABC[spinSlot()]].imgUrl}">`;
        }
        document.getElementById("slotOne").innerHTML = s;
}


// function slotTwo (lookupABC) {
//         var t = "";
//         for (var i = 0; i < lookupABC.length; i++) {
//             s += "" + `<img src="${abc[lookupABC[i]].imgUrl}">`;
//             }
//             document.getElementById("slotTwo").innerHTML = t;


//         }

           
//         function slotThree(lookupABC) {
//         var u = "";
//             for (var i = 0; i < lookupABC.length; i++) {
//                 s += "" + `<img src="${abc[lookupABC[i]].imgUrl}">`;
//                 }
//                 document.getElementById("slotThree").innerHTML = u;
//     }

function spinSlot() {
    return Math.floor(Math.random() * lookupABC.length)
    // lookupABC.sort(function() {
    //     return 0.5 - Math.random();
    // });
}




let scores, winner;

const timerEl = document.querySelector('#timer h2');
const scoreEl = document.querySelector('#score h2');
const slotEl = document.querySelector('#slotMachine div');


document.querySelector('#startBtn').addEventListener('click', playSlot);
// document.querySelector('#spinBtn').addEventListener('click', spin);

var p = scores

initialize();

function initialize() {
  scores = {
    p: 0,
  };

  winner = null;
  render();
}

// function getRandomIdx(slotArray) {
//    return Math.floor((Math.random() * 10) + 1);
// }

// function spin(gameScore) {
//     scores.p = abc[getRandomIdx()];
//     scores.p = abc[getRandomIdx()];
//     scores.p = abc[getRandomIdx()];
//     Winner = win();
//     // scores[winner]++;
//     render();
//   }

function gameScore() {
    if ('imgs/cupcake.png' === 'imgs/cupcake.png' | 'imgs/lemon.png' === 'imgs/lemon.png' | 'imgs/pineapple.png' === 'imgs/pineapple.png') {
        scores = (p + 50) 
    } else if ('imgs/cupcake.png' === 'imgs/cupcake.png' &&  'imgs/cupcake.png')
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

  
  }
  
