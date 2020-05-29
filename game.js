let GreenButton = document.querySelector("#green");
let YellowButton = document.querySelector("#yellow");
let BlueButton = document.querySelector("#blue");
let RedButton = document.querySelector("#red");
const playButton = document.querySelector("#Play");



let guesses = [];
let clicks = 0;
GreenButton.addEventListener("click", function(event) {
    guesses.push("Green");
    GreenButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

YellowButton.addEventListener("click", function(event) {
    guesses.push("Yellow");
   YellowButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

BlueButton.addEventListener("click", function(event) {
    guesses.push("Blue"); 
    BlueButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

RedButton.addEventListener("click", function(event) {
    guesses.push("Red");
    RedButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})
function finishgame() {
    if (guesses[0] === "Green"&& guesses[1] === "Yellow" && guesses [2] === "Red" && guesses[3] === "Blue" && guesses){
        alert ("You Won!")
    }
}


async function game() {

GreenButton.style.backgroundColor = "white";
    setTimeout (function () {
     GreenButton.style.backgroundColor = "green";
    },1000)
await new Promise(resolve => setTimeout (resolve, 1000)) 
YellowButton.style.backgroundColor = "white";
    setTimeout (function () {
    YellowButton.style.backgroundColor = "yellow";
    },1000)
await new Promise(resolve => setTimeout (resolve, 1000)) 
RedButton.style.backgroundColor = "white";
    setTimeout (function () {
    RedButton.style.backgroundColor = "red";
    },1000)
await new Promise(resolve => setTimeout (resolve, 1000))
BlueButton.style.backgroundColor = "white";
    setTimeout (function () {
     BlueButton.style.backgroundColor = "blue";
    },1000)
await new Promise(resolve => setTimeout (resolve, 1000));

}

// game()

playButton.addEventListener('click', game);






// for (let i = 0; i < 4; i++) {
//     GreenButton.style.backgroundColor = "white";
//     setTimeout (function () {
//         GreenButton.style.backgroundColor = "green";
//     },1000)
// }











// let game = {
//     count: 0,
//     colors: ["#green", "#red", "#yellow", "#blue"],
//     compSeq: [],
//     playerSeq: [],
//     sound: {
//       green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
//       red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
//       blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
//       yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    
// };

// const Green = document.querySelector ("#green");
// const Red = document.querySelector ("#red");
// const Blue = document.querySelector ("#blue");
// const Yellow = document.querySelector ("#yellow");

// function sound (color) {
//     switch (color) {
//       case "#green":
//         game.sound.green.play();
//         break;
//       case "#red":
//         game.sound.red.play();
//         break;
//       case "#yellow":
//         game.sound.yellow.play();
//         break;
//       case "#blue":
//         game.sound.blue.play();
//         break;
//     }

//   function animation(color) {
//     $(color).addClass("animate");
//     sound(color);
//     setTimeout(function() {
//       $(color).removeClass("animate");
//     }, 500)
//   }
