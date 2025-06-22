let num1=99
let num2="99abc"

console.log(typeof num1)
console.log(typeof(num2))

let valnum=Number(num2)

console.log(typeof valnum)
console.log(valnum)          //the type is converted to number but returns NaN

/*
Conversion to number

"99"--> 99
"99abc"-->NaN
true --> 1
false-->0


Conversion to boolean

1 --> true
0 --> false
"text" --> true

Conversion to string


*/

let anum=18

let anum2=String(anum)
console.log(anum2)
console.log(typeof anum2)