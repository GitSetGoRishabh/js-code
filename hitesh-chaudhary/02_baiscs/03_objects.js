// constructor --> singleton
//Object.create

// literals --> no singleton


//object literals

const mysym = Symbol("key1")

const JsUser = {
    name:"Rishabh",
    "full name":"Rishabh Singh Yadav",   // cannot access through . method
    [mysym]: "mykey1", //remeber to put braces as syntax must be corect to make it symbol otherwise it won't be symbol and be taken as just a string
    age:19,
    location:"Delhi",
    email:"rishabh@yadav.com",
    isLoggedIn:true,
    lastLoginDays:["Tuesday","thursday","Saturday"]


}

// console.log(JsUser.email)
// console.log(JsUser["email"])  // as keys are taken as strings while accessing the values from string it must be a string 
// console.log(JsUser["full name"]) // only way to access that string key

// console.log(typeof JsUser)
// console.log(typeof JsUser.mysym)
// console.log(JsUser[mysym])     // correct way of accessing

// JsUser.email = "rishabhyadav@google.com";
// Object.freeze(JsUser)
// JsUser.email= "rishabh@yadav.com"
// console.log(JsUser)  // freezes the object no change will be implemented but also no error will prompt

JsUser.greeting = function(){
    console.log("Hello dosto");
}

JsUser.greeting()
//calls the function 
console.log(JsUser.greeting)  
// gives function anonymous as it prints the function itself 
console.log(JsUser.greeting()) 
// returns the function and then undefined as well in the next line because the function doesn't return anything

JsUser.greetingTwo = function(){
    console.log(`hello ${this.name} bhai`)
}
JsUser.greetingTwo()