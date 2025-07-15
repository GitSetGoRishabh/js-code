// for Of

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world"

// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
    
// }

// const map = new Map();
// map.set('IN',"India")
// map.set('Fr',"France")
// map.set('IN',"India")
// map.set('USA',"United states of America")

// for (const [key,value] of map) {
//     console.log(key,':',value);
// }



// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':',value);
// }

// doesn't work on object to get both 
// (for in)
const myObject = {
    js:"Javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}
//you have to write like this in object , it won't work like arrays


// for arrays

const programming = ['js','rb',"cpp",'py']

for (const key in programming) {
    // console.log(programming[key]);
    // console.log(key);
    
}

// for each loop

const coding=['js','rb','py','cpp']

coding.forEach(function (item) {
    // console.log(item);
    
})

coding.forEach( (item) => {
    // console.log(item);
    
})

function printMe(item){
    // console.log(item)
}

// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

// const myCoding = [
//     {
//         languageName:'javascript',
//         fileName:'js'
//     },
//     {
//         languageName:'C++',
//         fileName:'cpp'
//     },
//     {
//         languageName:'python',
//         fileName:'py'
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName)
// })


const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums)