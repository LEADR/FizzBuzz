$('document').ready(function() {
  var myArray = [];

  for (var i = 0; i <= 99; i++) {
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
});
