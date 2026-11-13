//function expression: function is stored in a variable
let book = function read(bookName){
    console.log("reading the book " + bookName);
    return true;
};
console.log(book); //O/P : [Function: read], to read the function we should use () peranthasis
console.log(book()); //reading the book undefined
console.log(book('manualqa testing')); //reading the book manualqa testing, here the out log give the return value of the function
console.log(typeof book); // O/P : function
let s = book('manualqa testing');//O/P : reading the book manualqa testing
console.log(s); //O/P : true ,here the out log give the return value of the function
book('automation'); //O/P : reading the book automation
console.log(book.name); // Every function has a built-in name property: O/P : read

//default values: if no value is passed, the default value is used
/**
 * 
 * @param {*} userName 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
 function login(userName, password, role='user', status='active'){
    console.log("user name: " + userName + " password: " + password + " role: " + role + " status: " + status);
 }
 login('ravikumar', 'qa12345@', 'admin'); //
 login('ravikumar', 'qa12345@', 'manual', 'qa'); //O/P : user name: ravi password: qa12345@ role: manual status: inactive role: qa
