// A function that flattens an array of arrays into a single array

function flatten(arrays) {
  return arrays.reduce(function(generatedArray, currentArray) {
    return generatedArray.concat(currentArray)
  })
}

// var sampleArray = [[1, 2], [3, 4]]
// console.log(flatten(sampleArray))




// Calculating the age difference between a mother and a child using the ancestry data

function getAgeDifference(person) {
  if(byName[person.mother] == null) return 0
  return person.born - byName[person.mother].born
}

function isNotZero(number) { return number !== 0 }
var averageAgeDifference = average(ancestry.map(getAgeDifference).filter(isNotZero))

// console.log(averageAgeDifference)




/*
  Historical life expectancy
  Outputting the average age of the people in the ancestry data per century
*/

function groupBy(array, findGroup) {
  var groups = {}
  array.forEach(function(entry) {
    var entryGroup = findGroup(entry)
    if(entryGroup in groups) groups[entryGroup].push(entry)
    else groups[entryGroup] = [entry]
  })
  return groups
}

var ancestorsInCenturyGroups = groupBy(ancestry, function(person) {
  var century = Math.ceil(person.died / 100)
  return "century - " + String(century)
})

var averageAgesPerCentury = {}
for(var group in ancestorsInCenturyGroups) {
  var ages = ancestorsInCenturyGroups[group].map(function(person) {
    return person.died - person.born
  })
  averageAgesPerCentury[group] = average(ages)
}

// console.log(averageAgesPerCentury)




// Every and Some functions for arrays

function every(array, test) {
  for(var i = 0; i < array.length; i++) if(!test(array[i])) return false
  return true
}

function some(array, test) {
  for(var i = 0; i < array.length; i++) if(test(array[i])) return true
  return false
}

// function lessThanSix(number) { return number < 6 }
// function lessThanFour(number) { return number < 4 }
// function lessThanZero(number) { return number < 0 }
// function greaterThanThree(number) { return number > 3 }

// var numbers = [1, 2, 3, 4, 5]

// console.log(every(numbers, lessThanSix))
// console.log(every(numbers, lessThanFour))
// console.log(some(numbers, lessThanZero))
// console.log(some(numbers, greaterThanThree))

