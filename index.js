var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var outcome1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + outcome1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var outcome2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + outcome2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins!🏁";
} else {
    document.querySelector("h1").innerHTML = "Draw🎌!";
}
