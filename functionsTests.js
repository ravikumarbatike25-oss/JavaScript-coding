//Duplicate function is allowed in javascript. but Function always give latest defined function not the previous one
//Over loading is not allowed in java script
function search(){ 
    console.log("searching for the book");
}
function search(bookName){ //latest defined function will be executed
    console.log("search for book neme:", bookName);
}

search();
search("Java");


//Recursion :function chaining is allowed in javascript, but give stoke over flow error when function calls itself too many times
// for factorial recursion will be used
function read(){ 
    console.log("searching for the book");
    write();
}
function write(){ 
    console.log("write book neme:");
    remove();
}
function remove(){
    console.log("remove the book neme:");
    read();
}

//read(); //O/P : Maximum call stack size exceeded
write(); //O/P : Maximum call stack size exceeded

function sum(){
    console.log("print something");
    let x=10;
    let y=x+50;
    console.log("sum of two numbers:", y);
    //return y;
    sum();
}
sum();  //O/P : Maximum call stack size exceeded
