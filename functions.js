//Basic functions without parameters
function greet() {
    //console.log("Hello Ravi");
}

greet(); //calling the function,it will print the function body if we don't give any parameters in the function


//Functions with parameters
function greet(name) {
    console.log("Hello " + name);
}

greet("Ravi"); //passing the parameter to the function
greet("Kumar"); // passing the parameter to the function
greet(19);

//Functions with return type
function add(a, b) {
    //console.log("The sum of two numbers is: "+(a + b));
    let c=a + b;
    return c;
}

let result=add(10, 20);
console.log(result);
let result2=add(100, "ravi");
console.log(result2);


//Functions with return type and if-else statements
function studentMarks(studentName){
    console.log("the marks of the student is :" + studentName);

if(studentName=="Ravi"){
    return 85; //here return will work as Break
}
else if(studentName=="Kumar"){
    return 90;
}
else if(studentName=="John"){
    return 95;
}
else{
    console.log("Student not found");
    return 0;
}
};
let marks=studentMarks("Kumar"); 
console.log(marks);


//function without return type
// without return ,its check each condition and if condition is true then it will execute the code and if condition is false then it will not execute the code and it will return the last value of the marks.
/**
 * 
 * @param {string} studentName 
 * @returns {number} marks
 */
function studentMarks(studentName){
    console.log("the marks of the student is :" + studentName);
    marks=-1;

if(studentName.trim().toLowerCase()=="ravi"){  // trim() is used to remove the leading and trailing spaces and toLowerCase() is used to convert the string to lowercase.
    //return 85; //here return will work as Break
    marks=85;
}
else if(studentName.replaceAll(" ", "").toLowerCase()=="kumar"){ //remove all spaces within the string and then convert the string to lowercase.
    //return 90;
    marks=90;
}
else if(studentName=="john"){
    //return 95;
    marks=95;
}
return marks;
};

// let ma=studentMarks(" RavI "); 
// console.log(ma);
let ma2=studentMarks("K U m A r");
console.log(ma2);


//function with switch case
//BREAK should not be use when return is used.retun works as Break.
function studentMarksSwitch(studentName) {
    console.log("the marks of the student is :" + studentName);
    

    switch (studentName.replaceAll(" ", "").toLowerCase()) {
        case "ravi":
            return 85;

        case "kumar":
            return 90;

        case "john":
            return 95;

        default:
            console.log("Student not found");
            return 0;
    }
}

let M1 = studentMarksSwitch(" RavI ");
console.log(M1);
let M2 = studentMarksSwitch("K U m A r");
console.log(M2);
let M3 = studentMarksSwitch("John");
console.log(M3);
let m4 =studentMarksSwitch("kavya");

//function with parameters and return type
function getTotalprice(price, tax, discount){
    //let totalPrice = price + tax - discount;
    //console.log("The total price is :" + totalPrice);
    //return totalPrice;
    return price + tax - discount;
}

let totalPrice=getTotalprice(100,15,10);
console.log(totalPrice);
console.log(typeof getTotalprice); //intervew point of view:function
console.log(typeof totalPrice); //intervew point of view:number
