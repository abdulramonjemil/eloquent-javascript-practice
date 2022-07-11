/*
  A function that return an array of numbers from the given
  start to the given end. The third parameter determines the
  step of the increment of the start until it gets to the end
*/

function range(start, end, step = 1) {
  var arrayOfNumbers = []
  if(step > 0) {
    for(var currentNumber = start; currentNumber <= end; currentNumber += step) {
      arrayOfNumbers.push(currentNumber)
    }
  } else {
    for(var currentNumber = start; currentNumber >= end; currentNumber += step) {
      arrayOfNumbers.push(currentNumber)
    }
  }
  return arrayOfNumbers
}

// console.log(range(1, 10, 2))
// console.log(range(10, 1, -2))




// A function that returns the sum of numbers inside an array

function sum(numbers) {
  var total = 0
  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

// console.log(sum(range(1, 10, 3)))
// console.log(sum(range(1, 10)))
// console.log(sum(range(15, 2, -3)))




// A function that reverses an array

function reverseArray(arr) {
  var reversedArray = []
  for(let i = 0; i < arr.length; i++) {
    reversedArray.unshift(arr[i])
  }
  return reversedArray
}

// console.log(reverseArray([4, 3, 2, 1]))




// A function that reverses an array modifying the original array

function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    var oldValue = array[i]
    array[i] = array[array.length - i - 1]
    array[array.length - i - 1] = oldValue
  }
  return array
}


// var myArr = [5, 4, 3, 2, 1]
// console.log(myArr)

// reverseArrayInPlace(myArr)
// console.log(myArr)




// A function that converts an array to a linked list

function arrayToList(array) {
  var list = { value: array[array.length - 1], rest: null }
  for(let i = array.length -  2; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list
}

// console.log(arrayToList([5, 4, 3, 2, 1]))




// A function that converts a linked list to an array

function listToArray(list) {
  var array = []
  while(list) {
    array.push(list.value)
    list = list.rest
  }
  return array
}

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

// console.log(listToArray(list))




// A helper function that prepends an element to a list

function prepend(element, list) {
  return {value: element, rest: list}
}

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

// console.log(prepend(0, list))




// A function that return the nth item in a linked list

function nth(list, index) {
  if(index < 0) return undefined
  while(list && index > 0) {
    list = list.rest
    index--
  }
  return list ? list.value : undefined
}

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

// console.log(nth(list, 1))




// A function that returns the nth term in a linked list (recursive implementation)

function nthRecursive(list, index) {
  if(!list || index < 0) return undefined
  if(index === 0) return list.value
  return nthRecursive(list.rest, index - 1)
}

// var list = {
//   value: 10,
//   rest: {
//     value: 20,
//     rest: {
//       value: 30,
//       rest: null
//     }
//   }
// }

// console.log(nthRecursive(list, 2))




// A function that compares two objects by properties and values, not by identity

function deepEqual(object1, object2) {
  if(object1 === object2) return true
  if(object1 === null || object2 === null || typeof object1 !== "object" || typeof object2 !== "object") return false
  
  var propertyCountOne = 0, propertyCountTwo = 0  
  for(var property in object1) propertyCountOne += 1
  for(var property in object2) {
    propertyCountTwo += 1
    if(!property in object1) return false
    if(!deepEqual(object1[property], object2[property])) return false
  }
  return propertyCountOne === propertyCountTwo
}

// var obj = { here: { is: "an" }, object: 2 }
// console.log(deepEqual(obj, obj))
// console.log(deepEqual(obj, { here: 1, object: 2 }))
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// console.log(deepEqual(null, null))

