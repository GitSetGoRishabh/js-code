function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

// addTwoNumbers(3,4)
// addTwoNumbers()  ---> returns Nan as nothing is given
// addTwoNumbers("a",3)
// addTwoNumbers(3,"b")
// addTwoNumbers(3,null)

// const newNum = addTwoNumbers(3,5)

// console.log("result:", newNum)  //--> gives undefined

function addNumbers(n1,n2){
    // let result = n1+n2
    // return result
    return n1+n2
}

const result = addNumbers(4,9)
// console.log("result:", result)

function loggedInMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loggedInMessage("rishabh"))
console.log(loggedInMessage(""))
console.log(loggedInMessage())
 
