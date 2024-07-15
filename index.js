let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

function chooseColor() {
   let randomNumber = Math.round(Math.random()*3);   
   let randomChosenColour =  buttonColours[randomNumber];
   return randomChosenColour;
};

function nextSequence() {
   gamePattern.push(chooseColor());
   return gamePattern;
};

function animatePress(currentColour) {
   let selector = "#" + currentColour;
   $(selector).addClass("pressed");
   setTimeout(()=> {
      $(selector).removeClass("pressed");
   }, 100);
};

function playSound(name) {
   var audio = new Audio('sounds/' + name + '.mp3');
   audio.play();
 };

function showNext() {
   let nextRand = chooseColor();

   let nextButton = "#" + nextRand;
   $(nextButton).animate({opacity:0.2}).animate({opacity: 1});

   playSound(nextRand);
};


$(".btn").click(function() {

   let userChosenColour = $(this).attr("id");
   // console.log(userChosenColour);
 
   userClickedPattern.push(userChosenColour);
   // console.log(userClickedPattern);
   animatePress(userChosenColour);
   playSound(userChosenColour);
 });
