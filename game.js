let GreenButton = document.querySelector("#green");
let YellowButton = document.querySelector("#yellow");
let BlueButton = document.querySelector("#blue");
let RedButton = document.querySelector("#red");
const playButton = document.querySelector("#Play");
const resetButton = document.querySelector("#Replay");

const randomColors = function () {
    const colorAllbuttons = ["green", "red", "yellow", "blue"];
    colorAllbuttons.sort(function() {
        return .5-Math.random();
    })
return colorAllbuttons;
};
const randomButtons = randomColors();


let guesses = [];
let clicks = 0;
GreenButton.addEventListener("click", function(event) {
    guesses.push("green");
    GreenButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

YellowButton.addEventListener("click", function(event) {
    guesses.push("yellow");
   YellowButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

BlueButton.addEventListener("click", function(event) {
    guesses.push("blue"); 
    BlueButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

RedButton.addEventListener("click", function(event) {
    guesses.push("red");
    RedButton.style.backgroundColor = "white";
    clicks = clicks+1
    if (clicks === 4) {
        finishgame();
    }
})

function finishgame() {
    let Won = true
  for (let i = 0; i < randomButtons.length;i++) {
      console.log (randomButtons[i]);
      console.log (guesses[i]);
      if (randomButtons[i] !== guesses[i]) {
          Won = false 
      }
    }
  if (Won) {
      alert("Simon Says You Won");
  } else {
      alert ("Simon Says You Lost");
  }
};


async function game() {
    console.log(randomButtons);
    for (let i=0; i < randomButtons.length; i++){
        if (randomButtons[i] === "green"){
            GreenButton.style.backgroundColor = "white";
            setTimeout (function () {
            GreenButton.style.backgroundColor = "green";
            },1000)
            await new Promise(resolve => setTimeout (resolve, 1000))
        }else if (randomButtons[i] === "yellow"){
            YellowButton.style.backgroundColor = "white";
            setTimeout (function () {
            YellowButton.style.backgroundColor = "yellow";
            },1000)
        await new Promise(resolve => setTimeout (resolve, 1000)) 
        }else if (randomButtons[i] ==="red"){
            RedButton.style.backgroundColor = "white";
            setTimeout (function () {
            RedButton.style.backgroundColor = "red";
            },1000)
            await new Promise(resolve => setTimeout (resolve, 1000))  
        }else if (randomButtons[i] === "blue"){
            BlueButton.style.backgroundColor = "white";
            setTimeout (function () {
            BlueButton.style.backgroundColor = "blue";
            },1000)
            await new Promise(resolve => setTimeout (resolve, 1000))

        }


    }
function playGreen(GreenButton) {
    let audio = document.getElementById("1stclip");
    audio.play();
}




  }
    



console.log(playButton);
playButton.addEventListener('click', game);

resetButton.addEventListener('click', ()=> {
    location.reload();
})