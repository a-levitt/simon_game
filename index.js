let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
   if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
   }
});

$(".btn").click(function() {

   let userChosenColour = $(this).attr("id");
   // console.log(userChosenColour);
 
   userClickedPattern.push(userChosenColour);
   // console.log(userClickedPattern);

   animatePress(userChosenColour);
   playSound(userChosenColour);

   checkAnswer(userClickedPattern.length - 1);
 });

function nextSequence() {
   userClickedPattern = [];
   level++;
   $("#level-title").text("Level " + level);

   let randomNumber = Math.round(Math.random()*3);   
   let randomChosenColour =  buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
};

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
   } else {
      playSound("wrong");
      $("body").addClass("game-over")
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(()=> {
         $("body").removeClass("game-over");
      }, 200);
      reStart();
    }
};

function reStart() {
   level = 0;
   gamePattern = [];
   started = false;
};

function animatePress(currentColour) {
   $("#" + currentColour).addClass("pressed");
   setTimeout(()=> {
      $("#" + currentColour).removeClass("pressed");
   }, 100);
};

function playSound(name) {
   var audio = new Audio('sounds/' + name + '.mp3');
   audio.play();
};

