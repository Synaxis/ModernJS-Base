let val;
const number = Number
// Number to string
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// IMPORTANT
// toString()
val = (5).toString();
val = (true).toString();
// console.log(val.toFixed) ->. aplies only for numbers

// String to number
val = Number('5');
val = Number(true); // true as number = 1
val = Number(false); // false as number = 0
val = number('hello');
val = number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.30');
//console.log(val.toFixed(2)); // 2 decimals

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //length only works on strings
// console.log(val.toFixed());



// Type Coercion
// const val1 = 5;
// const val2 = 6;
// const sum = val1+val2;

const val1 = String(5);
const val2 = 6;
const sum = Number(val1+val2); // tells js val1 is a number not a string

console.log(sum);
console.log(typeof sum);