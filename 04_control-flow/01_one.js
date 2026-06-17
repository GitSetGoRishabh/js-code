/*
--> if

if(condition){
    (scope)
}

 if true then always goes , if false then never goes

 */

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("logged in")
// }


/*

<,>,<=,>=,==,!=

=== (checks type as well),!==(checks type as well as value(complement of ===))

*/


// if(2!==3){
//     console.log("executed")
// }else{
//     console.log("not executed");
    
// }
// console.log("Always execute") // outside scope so always executed


// let score = 200

// if(score>100){
//     let power = "swim"
//     // var power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(power) // not accesible as out of scope but if declared with var it is accessed

// const balance = 500

// if(balance>100) console.log("test")    //implicit scope

// if(balance<100){
//     console.log("Less than 100");
    
// }else if (balance<200){
//     console.log("Less than 200");
    
// }else if(balance<400){
//     console.log("Less than 400");
    
// }else{
//     console.log("500 or above")
// }

const isUserLoggedIn= true
const hasDebitCard= true
const loggedInFromGoogle=true
const loggedInFromEmail=true

if(isUserLoggedIn && hasDebitCard && 2!==3){  //AND operation
    console.log("Allowed to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){  // OR operation
    console.log("User logged in")
}