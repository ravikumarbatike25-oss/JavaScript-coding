//***********Truthy and Falsy values ***********
//Truthy values are those values which are not false or 0 or null or undefined or NaN or empty string or empty array or empty object.
//Falsy values are those values which are false or 0 or null or undefined or NaN or empty string or empty array or empty object.
if(0){
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if("0"){ // string is truthy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}


if(false){
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if (""){ // empty string is falsy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if (" "){ // space is truthy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if(null){
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if(undefined){
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if(NaN){
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if(''){ // empty string is falsy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if([]){ // empty array is truthy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}

if({}){ // empty object is truthy
    console.log('I am truthy');
}else{
    console.log('I am falsy');
}  
if (function () {}) { // function is truthy
    console.log('I am truthy');
} else {
    console.log('I am falsy');
}
