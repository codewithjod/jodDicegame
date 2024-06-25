//for first dice


var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage = "/dice" +randomNumber1+ ".png";
var randomImagesource = "./images"+randomDiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);


//for second dice

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceimage2 = "/dice" +randomNumber2+ ".png";
var randomImagesource2 = "./images"+randomDiceimage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesource2);

// for hrading message

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win 🚩"
}else if (randomNumber2>randomNumber1){
     document.querySelector("h1").innerHTML = "Player 2 win 🚩"
}else{
     document.querySelector("h1").innerHTML = " Match 👬🏾 Draw"
}