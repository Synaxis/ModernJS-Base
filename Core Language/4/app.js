// Numbers and the math Object
const math = Math

const num1 = 100;
const num2 = 60;
let val;

console.log(val);

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// math Object
val = math.PI;
val = math.E;
val = math.round(2.4);
val = math.ceil(2.4);
val = math.floor(2.8);
val = math.sqrt(64); //square root
val = math.abs(-3); //absolute number = 3
val = math.pow(8, 2);
val = math.min(2,33,4,1,55,6,3,2,1,6);
val = math.max(2,33,4,1,55,6,3,2,1,6);
val = math.random();

val = math.random();

val = math.floor(math.random() * 20 + 1);

console.log(val);