// Callback Function: A function that is passed as an argument to another function.

let sayHi = function(){
    console.log("Hi");
};

let sayGoodbye = function(callback){
    callback();
};

sayGoodbye(sayHi);


let add = (a,b) => a+b;
let sub =(a,b) =>a-b;
let mul =(a,b) => a*b;
let div = (a,b)  => a/b;

let calculate = function(a,b,callback){
    //console.log(callback(a,b));
    return callback(a,b); //return the result of the callback function
}
let r2=calculate(11,12,add);
console.log(r2);
let r3 =calculate(11,12,sub);
console.log(r3);
calculate(11,12,sub);
calculate(11,12,mul);
calculate(11,12,div);

console.log("==================================");

//example of callback function
function initDriver(browserName) {
    console.log('browser name :', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch Chrome');
            return true;

        case 'firefox':
            console.log('Launch Firefox');
            return true;

        case 'edge':
            console.log('Launch Edge');
            return true;

        default:
            console.log('Please pass the right browser:', browserName);
            return false;
    }
}

function enterURL(browserName, url, callback) {
    console.log('Starting the test case execution...');
    // Calling the callback function
    if(callback(browserName)){

    console.log('Enter the URL:', url);
}
}

// Passing initDriver as a callback
enterURL('chrome', 'https://www.nal.com', initDriver);

console.log("==================================");


 function num(a, b, callback){
    return callback(a,b);
 }
  let rw=num(10,20,(a,b)=> a+b ) //called arrow function which already exist
  console.log(rw);
 
//

function checkBrowser(browserName, callback){
    return callback(browserName);
}
let BW=checkBrowser("chrome", (browserName) =>{
    console.log('browser name :', browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch Chrome');
            return true;

        case 'firefox':
            console.log('Launch Firefox');
            return true;

        case 'edge':
            console.log('Launch Edge');
            return true;

        default:
            console.log('Please pass the right browser:', browserName);
            return false;
    };
});
if (BW){
    console.log("Enter the URL: https://www.nal.com");
}else{
    console.log("Please pass the right browser:");
}


// let num = [1,2,3,4,5,6,7,8,9,10];
//  num.forEach(e => console.log(e+5));

// console.log("==================================");

