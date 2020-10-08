var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var diceImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var diceImage2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);

var randomNumber3 = Math.floor((Math.random() * 6) + 1);
var diceImage3 = "dice" + randomNumber3 + ".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", diceImage3);

var randomNumber4 = Math.floor((Math.random() * 6) + 1);
var diceImage4 = "dice" + randomNumber4 + ".png";
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", diceImage4);

if ((randomNumber1 + randomNumber2) > (randomNumber3 + randomNumber4)) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if ((randomNumber3 + randomNumber4) > (randomNumber1 + randomNumber2)) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
