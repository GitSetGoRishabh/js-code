// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }


// addTwoNumbers(3,4)
// addTwoNumbers()  ---> returns Nan as nothing is given
// addTwoNumbers("a",3)
// addTwoNumbers(3,"b")
// addTwoNumbers(3,null)

// const newNum = addTwoNumbers(3,5)

// console.log("result:", newNum)  //--> gives undefined

// function addNumbers(n1,n2){
//     // let result = n1+n2
//     // return result
//     return n1+n2
// }

// const result = addNumbers(4,9)
// console.log("result:", result)

// function loggedInMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loggedInMessage("rishabh"))
// console.log(loggedInMessage(""))
// console.log(loggedInMessage())

// function calculateCartPrice(...num1){ //--> rest operator (...) 
//     // takes all arguements and wraps it into an array to the parameter
//     return num1
// }

// console.log(calculateCartPrice(200,300,400))
 
// const user = {
//     username : "rishabh",
//     price : 99
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user);

// handleObject({
//     username:"Risha",
//     price:1000
// })

const myNewArray = [200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300]))