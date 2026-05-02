// const email="r@rishabh.gpt"

// if(email){
//     console.log("Got user email");
    
// }else{
//     console.log("No email")
// }

/*
FALSY VALUES

false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
rest all truthy 


TRUTHY VALUES

"0" , "false" , " " , [] , {} , function(){} --> empty function
any string 

*/

//to check empty array 

// const userEmail = []

// if (userEmail.length===0){
//     console.log("Array is empty")
// }

//  to check empty object

// const emptyObject={}
// if(Object.keys(emptyObject).length===0){  //Object.keys(emptyObject) creates array form
//     console.log("Empty object")
// } 


// comparing truthy and falsy values also returns boolean on the basis of their nature

// Nullish coalescing operator (??): null undefined

let val1;
val1=5??10
val2=null ?? 10
val3=undefined ?? 10
val4=null ?? 10 ?? 5

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


//Ternary operator

// condition ? true : false

const iceTea = 100
iceTea <= 90 ? console.log("Less than 90") : console.log("More than 90")