//const booUser = new Object() // ----> singleton
const booUser = {}           // ----> non singleton

booUser.Id = "12345"
booUser.Name = "Sami"
booUser.isLoggedIn = false

// console.log(booUser);

// nesting can be done in objects
const regularUser = {
    email:"rishabh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rishabh",
            middlename:"Singh",
            lastname:"Yadav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",2:"d"}

// const obj3 = {obj1 , obj2}  
// const obj3 = Object.assign({}, obj1 , obj2) // --> assigns both obj1 and ob2 in {}
// if {} not specified then obj2 get assigned into obj1
// {} --> target , obj1 , obj2 --> source
// console.log(obj3)

const obj3= {...obj1,...obj2}
// console.log(obj3);

console.log(booUser)

console.log(Object.keys(booUser))
console.log(Object.values(booUser))
console.log(Object.entries(booUser))

console.log(booUser.hasOwnProperty('isLoggedIn'))
