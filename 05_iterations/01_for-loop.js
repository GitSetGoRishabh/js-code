//for

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     console.log(element);
// }

//  for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value is ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         // console.log(`inner loop value is ${j} and inner loop value is ${i}`);
//         console.log(i+'*'+j+'='+(i*j));    
//     }
    
//  }

//  let myArray = ["rishabh","singh","yadav"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==8) {
//         console.log("Thala for a reason");
//         break;
//     }
//     console.log(`value of i is ${index}`)
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==7) {
        console.log("Thala for a reason");
        continue;
    }
    console.log(`value of i is ${index}`)
    
}