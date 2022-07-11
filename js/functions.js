// A function that returns the minimum of two numbers

var min = function(number1, number2) {
  if(number1 > number2) return number2
  return number1
}

// console.log(min(8, 2))




// A recursive function that checks if a number is even

function isEven(number) {
  if(number <= 2) return number - 1 === 1
  return isEven(number - 2)
}

// console.log(isEven(50))
// console.log(isEven(75))




// A function that counts the number of uppercase B's in a given string

function countBs(givenString) {
  var count = 0
  for(let index = 0; index < givenString.length; index++) {
    if(givenString.charAt(index) === "B") count++
  }
  return count
}

// console.log(countBs("Bye Bye to Bob"))




/*
  A function that counts the number of the given character
  in the given string
*/

function countChar(givenString, givenChar) {
  var count = 0
  for(let index = 0; index < givenString.length; index++) {
    if(givenString.charAt(index) === givenChar) count++
  }
  return count
}

// console.log(countChar("Have a nice day", "a"))

