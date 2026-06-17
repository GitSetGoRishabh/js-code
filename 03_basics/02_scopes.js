// var c = 300
let a =300

if (true){
    let a =10
    const b =20
    // var c =30
}

// console.log(a)
// console.log(b)
// console.log(c)


// {} --> scope (kaha tk simit h )
// for eg a and b were created in the for loop under the local scope/block scope
// so they can only be accessed inside the scope 
// the var c outside is called global scope
// var has an issue , it makes it always global so values get altered

// function one(){
//     const username="rishabh"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);


//     two()
// }

// one()

// in nested function usually chld function can access parent's block / local scope

// if (true) {
//     const username="Rishabh"
//     if(username === "Rishabh") {
//         const website = "youtube"
//         console.log(username+website)
//     }
    // console.log(website)
// }
// console.log(username)

addone(5)

 function addone(num) {
    return num+1
 }

 
addTwo(5)

 const addTwo = function(num) {
    return num+2
 }

 

 //both are the ways for function but 1st can operate if declaration is later than calling
 // but 2nd will throw error if accessed first then declaration 