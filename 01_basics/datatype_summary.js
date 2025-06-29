/*
primitive --> call by value
7 types:
string
number
boolean
null
undefined
symbol
bigint

Non primitive --> call by reference
Array
objects
functions
*/

const id=Symbol('123')
const otherid=Symbol('123')

console.log(id===otherid)
const bignumber= 4156415348451235n



const heroes=["shaktiman","nagraj"]
let obj={
    name:"Rishabh",
    age:100
}

const myfunction=function(){
    console.log("I am a good boy!")
}

myfunction()
console.log(heroes)
console.log(obj)


//----------------------------------------------------------------------------------------------------------------------------------------

// Stack(Primitive)     |     heap(non primitive)