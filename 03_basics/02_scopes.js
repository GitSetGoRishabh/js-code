// var c = 300
let a =300

if (true){
    let a =10
    const b =20
    // var c =30
}

// console.log(a)
// console.log(b)
// console.log(c)


// {} --> scope (kaha tk simit h )
// for eg a and b were created in the for loop under the local scope/block scope
// so they can only be accessed inside the scope 
// the var c outside is called global scope
// var has an issue , it makes it always global so values get altered

function one(){
    const username="rishabh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);


    two()
}

one()

// in nested function usually chld function can access parent's block / local scope

