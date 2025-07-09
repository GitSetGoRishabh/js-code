// immediately invoked function expressions (iife)

(function one () {
    console.log("DB CONNECTED")
})();

//to prevent it from polluting global scope iife is used

(  (name) => {
    console.log(`DBCONNECTED AGAIN ${name}`)
})("rishabh");

//use ; as iife doesn't know where to end