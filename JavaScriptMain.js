// The modal
var modal = document.getElementById('helpModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for click to open
modalBtn.addEventListener('click', openModal);

//Listen for click to close
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);

//Open button function
function openModal() {
  modal.style.display = 'block';
}

//Close button function
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal with outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// JavaScript for the game page

$(document).ready(function () {
  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();
  $(".continue-play").hide();

  // Starting at box 1
  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

  // Continuing to box 2
  $(".continue-2").click(function () {
    $(".storylineS2").hide();
    $(".storylineS3").show();
  });

  // Continuing to box 3
  $(".continue-3").click(function () {
    $(".storylineS3").hide();
    $(".choice-a").show();
    $(".choice-b").show();
    $(".choice-c").show();
  });

});

$(document).ready(function(){
  $("#startScreen").hide();
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").hide();
  $("#try-open-right-door").hide();
  $("#try-knock-right-door").hide();
  $("#run-into-forest").hide();
  $("#investigate-outside-more").hide();
});

//PHASE 1
function gameStart() {
  //game ids
  $("#background-music").hide();
  $("#startScreen").show();
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

  $(".continue-2").click(function () {
    $(".storylineS2").hide();
    $(".storylineS3").show();
  });

}

// Game Starting
function theWindow(){
  //game ids
  $("#startScreen").hide();
  $("#the-window").show();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();

  $(".continue-1").click(function(){
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

}

function theDoor() {
  //game ids
  $("#startScreen").hide();
  $("#the-window").hide();
  $("#the-door").show();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

  $(".continue-2").click(function () {
    $(".storylineS2").hide();
    $(".storylineS3").show();
  });
}


function exploreRoomMore() {
  //game ids
  $("#startScreen").hide();
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").show();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

  $(".continue-2").click(function () {
    $(".storylineS2").hide();
    $(".storylineS3").show();
  });
}

function exploreDesk() {
  //game ids
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").show();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });

  $(".continue-2").click(function () {
    $(".storylineS2").hide();
    $(".storylineS3").show();
  });
}

function noExploreDesk() {
  //game ids
  $("#startScreen").hide();
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").show();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
}

//PHASE 2

function windowLock(){
  /*game ids*/
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").show();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

function doorLock(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").show();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
  $(".storylineS2").hide();
  $(".storylineS3").hide();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

function deskLock(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").show();
  $("#look-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
}

function lookLeftCorridor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").show();
  $("#look-right-corridor").hide();

  $(".storylineS").show();
}


function lookRightCorridor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").show();

  $(".storylineS").show();
}

//PHASE 3

function exploreLeftSide(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").show();
  $("#explore-right-corridor").hide();

  $(".storylineS").show();
}

function investigateOriginalRoom(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").show();
  $("#explore-right-corridor").hide();

  $(".storylineS").show();
}

function exploreRightSide(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").show();

  $(".storylineS").show();
}

//PHASE 4.1
function exploreLeftDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").show();
  $("#explore-right-room").hide();

  $(".storylineS").show();
}

function tryOpenLeftDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").show();
  $("#explore-right-room").hide();

  $(".storylineS").show();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

function tryOpenLeftDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").show();
  $("#explore-right-room").hide();

  $(".storylineS").show();
  
  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

function knockOnLeftDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").show();
  $("#explore-right-room").hide();

  $(".storylineS").show();
  
  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

//PHASE 4.2
function exploreRightDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").show();
  $("#try-knock-right-door").hide();

  $(".storylineS").show();
}

function tryOpenRightDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").hide();
  $("#try-open-right-door").show();
  $("#try-knock-right-door").hide();

  $(".storylineS").show();

  $(".continue-1").click(function () {
    $(".storylineS").hide();
    $(".storylineS2").show();
  });
}

function knockOnRightDoor(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").hide();
  $("#try-open-right-door").hide();
  $("#try-knock-right-door").show();

  $(".storylineS").show();
}


//PHASE 5
function runThroughForest(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").hide();
  $("#try-open-right-door").hide();
  $("#try-knock-right-door").hide();
  $("#run-into-forest").show();
  $("#investigate-outside-more").hide();

  $(".storylineS").show();
}

function investigateMoreOutside(){
  $("#the-window").hide();
  $("#the-door").hide();
  $("#look-around-room").hide();
  $("#check-desk-drawers").hide();
  $("#no-check-desk").hide();
  $("#key-on-window").hide();
  $("#key-on-door").hide();
  $("#key-on-desk").hide();
  $("#look-left-corridor").hide();
  $("#look-right-corridor").hide();
  $("#explore-left-corridor").hide();
  $("#explore-lit-room").hide();
  $("#explore-right-corridor").hide();
  $("#explore-left-room").hide();
  $("#try-open-left-door").hide();
  $("#try-knock-left-door").hide();
  $("#explore-right-room").hide();
  $("#try-open-right-door").hide();
  $("#try-knock-right-door").hide();
  $("#run-into-forest").hide();
  $("#investigate-outside-more").show();

  $(".storylineS").show();
}

//Music functions
function playMusic() {
  document.getElementById("audio-1").play();
  /*document.getElementById("audio-2").play();
  document.getElementById("audio-3").play();
  document.getElementById("audio-4").play();
  document.getElementById("audio-5").play();
  document.getElementById("audio-6").play();*/
}

function pauseMusic(){
  document.getElementById("audio-1").pause();
  /*document.getElementById("audio-2").pause();
  document.getElementById("audio-3").pause();
  document.getElementById("audio-4").pause();
  document.getElementById("audio-5").pause();
  document.getElementById("audio-6").pause();*/
}

function changeMusic(){
  var music1 = document.getElementById("audio-1");
  if (music1.paused == true){
    playMusic();
  }
  else{
    pauseMusic();
  }
}