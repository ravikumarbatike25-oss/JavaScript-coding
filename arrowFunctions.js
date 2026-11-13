// Arrow Function: => arrow operator
// has no name: Anonymous function
// used in callback function
// no need to write function keyword
// no need to write return keyword

// 1.No parameter
let print = () => {
    console.log('hello JS');
};
print();

let num =() => {
    console.log("JS")
};
num();

// 2.One parameter
let printName = (name) => {
    console.log(name);
};
printName('Naveen');


let add =(num) =>{
    console.log(num +100);
};
add(10);

let printNum = (num) => {
    console.log(`total number: ${num + 100}`);
};
printNum(10);

const printTotal = (total) => 
    console.log(total + 90); // without curly braces, it will return the value
printTotal(1000);



let printBill = (billing) => {
    console.log(billing + 90);
    console.log('billing is done');
};
printBill(500);

// without return keyword
let a = (print)=> print+100 
    let c =a(10);
    console.log(c);



let doLowercase =(name) =>name.toLowerCase();
let lw=doLowercase("RAVIKUMAR");
 console.log(lw);


 //two parameters
 let addTwoNumbers =(a,b) => a+b;  {
  let r =addTwoNumbers(10,20);
  console.log(r);
  console.log(r+20);
 };

 //Rest parameters
 let addNumbers =(...nums) =>{
    console.log(nums);
    let total =0;
    for(let num of nums){
        total +=num;
    }
    return total;

 };
 let result =addNumbers(10,20,30,40,50);
 console.log(result);
 

 let rest =(...nums) =>{
    console.log(nums);
    console.log(nums+10)
    console.log(nums[1]+20)
 }
 rest(10,20,30,40,50);

//Arrow function in object
//Important: Arrow functions do not have their own this. For object methods where you need this.name, a regular function/method is generally preferred
 let user = {
    name: "Ravi",
    
    greet: () => {
        console.log("Hello" + this.name); //this.name is undefined because arrow functions do not have their own this.
    }
};

user.greet();


let user2 = {
    name: "Ravi",

    greet() { //Anonymous function
        console.log("Hello " + this.name);
    }
};

user2.greet();