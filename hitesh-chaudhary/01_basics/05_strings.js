const name = "Rishabh"
const repoCount = "8"

console.log(name," Repo:",repoCount) // not good practice

console.log(`My name is ${name} and my repo count is ${repoCount}`) //better way (string interpolation)

//Another way to define a string 

const Myname = new String("Rishabh bro")
console.log(Myname);
console.log(Myname[0]);
console.log(Myname.__proto__);
console.log(Myname.length)
console.log(Myname.toUpperCase())  // it doesn't change the original value 
console.log(Myname)
console.log(Myname.charAt(2));
console.log(Myname.indexOf('s'))

const NewName=Myname.substring(0,5)
console.log(NewName)

const name2=Myname.slice(0,5)
console.log(name2)

name1="  Rishabh   "
console.log(name1.trim())

url="https://rishabh.com/rishabh%20yadav"
console.log(url.replace("%20","-"))

console.log(url.includes("singh"))

// String to array 

console.log(Myname.split(" "));
console.log(Myname.split(""));
console.log(Myname.split("-"));

