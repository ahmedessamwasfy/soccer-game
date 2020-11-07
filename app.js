const input = document.querySelector('.inputplay');

const outplayer1 = document.getElementsByClassName('player1 score');

const outplayer2 = document.getElementsByClassName('player2 score');

const Start = document.getElementById('Start');
const Reset = document.getElementById('Reset');

const player1 = document.getElementById('INplayer1');
const player2 = document.getElementById('INplayer2');


//let start = 0;
// console.log(Start);

let startflag = 0;

let maxScore = -1;

let P1score = 0;
let P2score = 0;

//Start Event
Start.addEventListener('click', function (e) {
    if (startflag === 0) startclick(e.target);
});

//max score set
input.addEventListener('change', function (e) {
    if (startflag === 0) MaxScoreSet(e.target);
});


//player1
player1.addEventListener('click', function (e) {
    if (startflag === 1) Player1play(e.target);
});


player2.addEventListener('click', function (e) {
    if (startflag === 1) Player2play(e.target);
});

Reset.addEventListener('click', function (e) {
    location.reload();
});




// function (e) {
//     //e.target.textContent = 'sssss';
//     let starteventobj = e.target;
//     startclick(e)
// }

// while (start !== 0) {


// }
function startclick(e) {
    // alert('hamo');
    //e.textContent = "hamp";
    startflag = 1;
    //   start=1;
    //startevent();
}

function MaxScoreSet(e) {
    console.log(e.value);
    if (e.value > 0) {
        maxScore = e.value;
        // console.log(document.getElementsByClassName('outputplay'))
        document.getElementsByClassName('outputplay')[0].textContent = e.value;
    }
}


function Player1play(e) {

    console.log("player1");
    P1score++;
    // console.log(document.getElementsByClassName('player1score')[0]);


    document.getElementsByClassName('player1score')[0].textContent = P1score;
    if (P1score === Number(maxScore)) {
        document.getElementsByClassName('player1score')[0].style.color = 'green';
        startflag = null;

        console.log("finish");
    }

}

function Player2play(e) {

    console.log("player2");
    P2score++;

    //console.log(document.getElementsByClassName('player2score')[0]);
    document.getElementsByClassName('player2score')[0].textContent = P2score;
    console.log(P2score);
    if (P2score === Number(maxScore)) {
        document.getElementsByClassName('player2score')[0].style.color = 'green';
        startflag = null;
        console.log("finish");

    }



}
