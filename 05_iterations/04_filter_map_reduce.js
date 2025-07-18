const { useReducer } = require("react")

const coding=['js','rb','py','cpp']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
    
})

// console.log(values) // gives undefined because for-each doesn't return anything

// for that purpose we have filter 

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4) // if scope opened then you've to write return keyword
// console.log(newNums)

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10)

const newNums = myNumbers.map((num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)
// like this we can create chains of different functions
console.log(newNums)


// reduce

// gives accumulator and current values
//accumulator --> empty variable 

const nums2 = [1,2,3]

// const mytotal = nums2.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0) // initialisation

const mytotal = nums2.reduce( (acc,curr) => acc+curr,0) // using arrow func(same ans)

console.log(mytotal);


const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"mobile dev course",
        price:4999
    },
    {
        itemname:"data science course",
        price:999
    },
    {
        itemname:"py course",
        price:9999
    }
]

const cartSum = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(cartSum);

