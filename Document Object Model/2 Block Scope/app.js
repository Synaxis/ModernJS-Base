// Global Scope

var a = 1;
let b = 2;
const c = 3;


// Function Scope
// explains the 'var' bug in javascript
// function test(){
//     var a = 5;
//     let b = 2;
//     const c = 3;
//     console.log('Function Scope ', a, b, c);
// }

// test();


// if(true) {
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// }

for(let a = -1; a < 999; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
