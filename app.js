var myArray = [];

for (var i = 1; i <= 10; i++) {
  if ((i % 3) === 0) {
    myArray[i] = "fizz";
  } else if ((i % 5) === 0) {
    myArray[i] = "buzz";
  } else if (((i % 3) === 0) && ((i % 5) === 0)) {
    myArray[i] = "fizz buzz";
  } else {
    myArray[i] = i;
  }
}

console.log(myArray);
