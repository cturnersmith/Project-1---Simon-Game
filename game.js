console.log("testing");
let GreenButton = document.querySelector("#green");
let YellowButton = document.querySelector("#yellow");
let BlueButton = document.querySelector("#blue");
let RedButton = document.querySelector("#red");
const playButton = document.querySelector("#Play");
const resetButton = document.querySelector("#Replay");



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
console.log('one');
function finishgame() {
    if (guesses[0] === "Green" && guesses[1] === "Yellow" && guesses [2] === "Red" && guesses[3] === "Blue" && guesses){
        alert ("Simon Says You Won!")
    }
};

console.log("two");
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
    await new Promise(resolve => setTimeout (resolve, 1000))
}

console.log(playButton);
playButton.addEventListener('click', game);

resetButton.addEventListener('click', ()=> {
    location.reload();
})