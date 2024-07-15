let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   let randomNumber = Math.round(Math.random()*3);   
   let randomChosenColour =  buttonColours[randomNumber];
   return randomChosenColour;
};

let gamePattern = [];

function newArr() {
   gamePattern.push(nextSequence());
   return gamePattern;
};

function showNext() {
   let nextButton = "#" + nextSequence();
   $(nextButton).animate({opacity:0.2}).animate({opacity: 1});
};

