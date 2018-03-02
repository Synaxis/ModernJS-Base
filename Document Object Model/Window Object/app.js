// Window methods   / Objects / Properties

//Alert
//alert('Hello World');


// Prompt ( similar to alert , but takes an input)
// const input = prompt();
// alert(input);


// Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// }   else{
//     console.log('NO');
// }

let val;

// Outter height and Width
val = window.outerHeight;
val = window.outerWidth;


// Inner height and Width
val = window.innerHeight;
val = window.innerWidth;


// Scroll points
val = window=scrollY;
val = window=scrollX;


// Location Object 
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;


// Redirect
// window.location.href = 'http://google.com';
// //Reload
// window.location.reload();


// History Object
// window.history.go(-1);
//val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;



console.log(val);