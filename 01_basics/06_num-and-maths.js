// const score = 99
// console.log(score)

// const balance = new Number(1000)
// console.log(balance)


// console.log(balance.toString().length)
// console.log(balance.toFixed(3))

// const otherNumber = 117.643
// console.log(otherNumber)
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))
// console.log(otherNumber.toPrecision(2))

// // be careful while using toPrecision function as result varies if proper arguemnt not given

// const num=100000
// console.log(num.toLocaleString('en-US'))
// console.log(num.toLocaleString('en-IN'))

// ----------------------------------maths-------------------------------------------------

  console.log(Math)
  console.log(Math.abs(-4))  // changes negative to positive(absolute value)
  console.log(Math.abs(4))
  console.log(Math.round(4.3))
  console.log(Math.ceil(4.7))  // takes next closes value
  console.log(Math.floor(4.7)) // takes previous closest value 
console.log(Math.min(3,4,5,6,7))
console.log(Math.max(3,4,5,6,7))
console.log(Math.random())     // returns random number b/w 0-1
console.log(Math.random()*10 + 1) 

const max = 10
const min = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
