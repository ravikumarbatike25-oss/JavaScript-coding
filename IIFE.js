
// IIFE function is a function that is executed immediately
// () is used to execute the function immediately
// IIFE function, Without Parameters
(function(){
    console.log("IIFE function");
})
(); //call back function
 

// IIFE function with parameters
(function(parameter){
console.log("Hello " + parameter);
})("Ravikumar");


// IIFE function with return value
let rk=(function(){
    return "Hello World";
})();
//print the result of the IIFE function
console.log(rk);

// IIFE function with return value and parameters
let result=(function(returnParameter){
    let result = "Hello " + returnParameter;
    return result;
})("return+parameter");
console.log(result);
