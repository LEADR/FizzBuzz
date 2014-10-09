$('document').ready(function() {

  var integer;

  while(true) {
    var numberChoice = prompt("Please choose a number.");
    if (isNaN(numberChoice)) {
      alert("That is not a number! Please type in a number using numerical digits.");
    } else if ((numberChoice % 1) !== 0) {
      alert("Please choose a whole number integer.");
    } else {
      integer = +numberChoice;
      break;
    }
  }

  var myArray = [];

  var count = function(range) {
    for (var i = 0; i <= (range-1); i++) {
      var num = i + 1;
      if (((num % 3) + (num % 5)) === 0) {
        myArray[i] = "fizz buzz";
      } else if ((num % 3) === 0) {
        myArray[i] = "fizz";
      } else if ((num % 5) === 0) {
        myArray[i] = "buzz";
      } else {
        myArray[i] = num;
      }
      $('<p>').html(myArray[i]).appendTo('.test');
    }
  };
  count(integer);
});
