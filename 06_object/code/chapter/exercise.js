// Handling vectors

function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
})

// console.log(new Vector(1, 2).plus(new Vector(2, 3)))
// console.log(new Vector(1, 2).minus(new Vector(2, 3)))
// console.log(new Vector(3, 4).length)




// Creating a streched cell for the table

function StretchCell(inner, width, height) {
  this.inner = inner
  this.width = width
  this.height = height
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth())
}

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight())
}

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height)
}

// var sc = new StretchCell(new TextCell("abc"), 1, 2)
// console.log(sc.minWidth())
// console.log(sc.minHeight())
// console.log(sc.draw(3, 2))




/*
  Implementing a sequence interface
  - A function logFive that logs the first five elements of the sequence into the console
*/

function logFive(sequence) {
  for(let i = 0; i < 5; i++) {
    console.log(sequence.itemInIndex(i))
    if(sequence.isLastIndex(i)) break
  }
}

function ArraySeq(array) {
  this.items = array
}

ArraySeq.prototype.itemInIndex = function(index) {
  return this.items[index]
}

ArraySeq.prototype.isLastIndex = function(index) {
  return index === this.items.length - 1
}

function RangeSeq(from, to) {
  this.from = from
  this.to = to
}

RangeSeq.prototype.itemInIndex = function(index) {
  var generatedItem = this.from + index
  return generatedItem <= this.to ? generatedItem : undefined
}

RangeSeq.prototype.isLastIndex = function(index) {
  return index === (this.from + index === this.to)
}

// logFive(new ArraySeq([5, 10]))

// logFive(new RangeSeq(100, 1000))
