const myArr = [0,1,2,3,4,5,6]  // different type of elements can be in an array

// console.log(myArr[0]);      // indexing starts with 0

// const myHeroes = ["Shaktiman","Batman"];

// const myArr2 = new Array(1,2,3,4);
// console.log(myArr[1]);

// myArr.push(8);  // adds the passed value in the array 
// console.log(myArr)

// myArr.pop();   // removes last value from the array
// console.log(myArr)

// myArr.unshift(9);
// console.log(myArr);  // adds at the start of the array

// myArr.shift();      // removes the first value from the array 
// console.log(myArr);

// console.log(myArr.includes(9));   // returns boolean after checking 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  //converts into string after joining , comma seperated

// console.log(newArr)
// console.log(myArr)
// console.log(typeof(myArr))
// console.log(typeof(newArr))

// slice , splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log("B ",myn1)

console.log(myArr);

const myn2 = myArr.splice(1,3,"a","b") // extracts the values from the array
console.log("C ",myn2)         // also changes the original array by removing thos
// .splice(startindex , delete count)
// if used .splice(x,y,"a","b") it inserts the given 2 elements a and b 
// in the same position as the ones removed
console.log("D ",myArr)