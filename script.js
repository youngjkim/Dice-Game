// First Dice

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImage = "dice" + randomNumber1 + ".png" // dice1.png = dice6.png
let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png
let firstDice = document.querySelectorAll("img")[0];

firstDice.setAttribute("src", randomImageSource);

// Second Dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let secondDice = document.querySelectorAll("img")[1];

secondDice.setAttribute("src", randomImageSource2);

// Who's the winner?

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} 
else {
    document.querySelector("h1").innerHTML = "Draw! Refresh again!"
}