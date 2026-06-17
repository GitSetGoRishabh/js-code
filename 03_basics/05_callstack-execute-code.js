/*
how js works ?

steps:
1. Global Execution context
2. Memory phase/creation phase 
3. execution phase

for eg let's take a code

*/
let val1=10
let val2=2

function one(num1,num2){
    return num1+num2;
}

let result1 = one(val1,val2)
let result2 = one(10,5)

/*
 first of all "this" is set to global execution context

 then the memory phase starts :
 here , the js engine scans the code and allocates memory or initialises the variables
 declared not with but just undefined
 also the functions are set to their function definition  

 then the execution phase starts:
 the values of variables are set 
 now for the function , a function execution context is created
 it has two phases (memory phase and execution phase)
 they work as above 
 and at last the return value goes to the global execution context
 

 now as for the above code 

 1. 
 val1 , val2 ,result1,result2 are initialised as undefined and function one defined

2. 
values to variables assigned and function execution context created which has threads 

3. inside the FE context 
variables are declared
runs
returns

4. 
the returned value goes to the global execution context


THE STORY DOESN'T END HERE

CALL STACK

suppose there is a function one() it is called then it goes into the container 
which i have tried to show all the process above is done and then it goes out 
and after that it is deleted

        /---------------\     /-------------------\
        |           |   |     |  |                |
        |           |   |     |  |                |
        |           |            |                |
 (comes in)         |    one()   |             (then goes out)
                    |   (runs)   |
                    |____________|
                    |  global EC |
                    \____________/

but it becomes interesting if i have nested function ... let's take an example
 */

function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}

one()

/*

suppose i call one() then the two is automatically called before one() going out
and then two() calls three() and they get stacked 

so for getting out
call stack works as LiFo(last in first out)

consider the above diagram again 
             
                    |   three()  |             
                    |            |              
                    |   two()    |              
                    |            |             
                    |    one()   |
                    |____________|
                    |  global EC |
                    \____________/

They become stacked like this and then by LIFO they vanish 

now here the three() goes out first , then two () and then one()
*/