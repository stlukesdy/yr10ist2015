$(document).ready(function () {
  $("#runbutton").click(program);
});

var program = function() {


  var myGuess = 42;

  var guess = $("#guess").val();
  guess = parseInt(guess);

  if (guess === myGuess) {
    console.log("Well done - you guessed my number!");
  } else {
    console.log("That is not correct.");
  }

};
