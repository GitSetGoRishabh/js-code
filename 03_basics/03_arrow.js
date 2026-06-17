const user = {
    username:"Rishabh",
    price:999,

    welcomeMessage: function() {
        console.log(`Welcome to the website , ${this.username}`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="risha"
// user.welcomeMessage()
// console.log(this)

// "this" inside the function gives the current state of that object
//"this" outside gives empty object {} , in browser console it gives window 

// function risha (){
//     let username = "rishabh"
//     console.log(this)
//     console.log(this.username) // gives undefined ... it doesn't works in function,only objects
// }

// risha()

// how to write arrow function 

const rishabh = () => {
    let username = "yadav"
    console.log(this.username)
}

// rishabh()

// implicit return arrow function

const addTwo = (num1,num2) => (num1+num2)
// if {} used after arrow , you've to write return keyword
// but if parenthises used then return not needed


const name = () => ({username:"Rishabh"})
// to return object this is how you've to use parenthesis otherwise it won't return

console.log(addTwo(3,4))
console.log(name())