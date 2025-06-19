 const accountid=12345                    // defines a constant 
let accountemail="rishabh@gmail.com"
var accountpass="123456789"
accountcity="Kota"
let accountstate;

// accountid=19703                         // (not allowed because it's a constant)

accountemail="Risha@gmail.com"
accountpass="00000"                       //These variable values can be changed 
accountcity='Delhi'

console.log(accountid)                    // will return the constant accountid


/*
try not to use var method 
beacause of issue in block scope and functional scope 
let is the best method
*/

console.table([accountid,accountemail,accountpass,accountcity,accountstate])      //returns a table with the passed attributes
