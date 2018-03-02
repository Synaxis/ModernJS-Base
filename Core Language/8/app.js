// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// FOR IN LOOP  !Important
const user = {
    firstName : 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}