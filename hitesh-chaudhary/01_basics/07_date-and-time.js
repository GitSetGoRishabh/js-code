// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof(mydate));

//let myCreatedDate= new Date(2025,0,2)  // in this month start from 0 rather than from 1
// console.log(myCreatedDate.toString())

// let myCreatedDate2= new Date(2025,0,2,5,3,6)
// console.log(myCreatedDate2.toLocaleString())

// let myCreatedDate3= new Date("2025-08-02")
// let myCreatedDate4= new Date("22-09-2025")
// console.log(myCreatedDate3.toLocaleDateString())
// console.log(myCreatedDate4.toLocaleDateString())

// let myTimeStamp = Date.now();               // in miliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());      // in miliseconds
// console.log(Math.floor(Date.now()/1000));  // in seconds

let newDate=new Date()

// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)           // as it starts from 0


console.log(newDate.toLocaleDateString('default',{
    weekday:"long"
}))

