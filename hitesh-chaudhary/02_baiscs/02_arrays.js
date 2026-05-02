const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Batman","Flash"]

// const heros = marvel_heros.concat(dc_heros);
// const heros2 = marvel_heros.push(dc_heros); // it returns the length of array
// marvel_heros.push(dc_heros); // adds the whole array as a single element

// console.log(marvel_heros);
// console.log(heros);

// you can also use spread
// it adds the element after spreading it into single elements
// const newheros = [...marvel_heros,...dc_heros]
// console.log(newheros)

// //flat method
// const array2 = [1,2,3,[4,5,6],7,[6,7,[7,8,9]]] // it makes every digit a single element
// const real_array2 = array2.flat(Infinity)  
// console.log(real_array2)

// while scrapping data may be of different types

// console.log(Array.isArray("Rishabh")) //checks for array
// console.log(Array.from("Rishabh"))    // converts to array

// console.log(Array.from({name:"Rishabh"}))
// returns empty array bcz it doesn't know what to do with this type of arguement
// you can make array just for keys or just from values

let score1=10
let score2=20
let score3=30

console.log(Array.of(score1,score2,score3)); // creates a new array with set of variables
