let num = [10, 20, 30, 40, 60]; // 0-4; length = 4
console.log(num);
console.log(num.length); // 5
console.log(typeof num); // object 
console.log(num[-1]); // undefined
console.log(num[0]); // 10
console.log(num[3]); // 40
console.log(num[4]); // 60
console.log(num[40]); // undefined
// li = 0;
// hi = len - 1;
// len = hi + 1; 4+1=5
console.log(num.length); // 5
console.log(typeof num); // object 
console.log(num[-1]); // undefined
console.log(num[0]); // 10
console.log(num[3]); // 40
console.log(num[4]); // 60
console.log(num[40]); // undefined
// li = 0;
// hi = len - 1;
// len = hi + 1; 4+1=5
console.log(num.length);
console.log("li = " + 0);
console.log("hi = " + (num.length - 1));
num[5] = 50;
console.log(num);
console.log(num.length); 
num[10] = 100;
console.log(num);
console.log(num[9]);

let r= ["Ravi", "kumar", "kavya", "Tom", "joy"];
console.log(r);
console.log(r.length);
console.log(r[2]);
r[2]= "lucky";
console.log(r);
r["Ravi"] = "Ravi Kumar";
console.log(r);


const l= [10, 20, 30, 40, 60];
console.log(l);
l[3]= 50; 
console.log(l);
l[5]=100; 
console.log(l); 

// let is mutable but const is immutable
// const is used to declare a constant variable
//const l= ["Ravi", "kumar", "kavya", "Tom", "joy"];  //shows error because const is immutable 
//console.log(l);

let j= ["Ravi", "kumar", "kavya", "Tom", "joy"];
console.log(j);


let a= [10, 20, 30, 40, 60]; // 
console.log(a);
console.log(a.length);
console.log(typeof a); // object 


 a= [20, 40, 98.09]; //let we can reinitialize 
console.log(a);


// Array.of() is used to create an array with the given elements
let d = Array.of(10, 20, 30, 40, 60);
console.log(d);

// Array.from() is used to create an array from an iterable object
let k = Array.from("ravikumarQA");
console.log(k);

let g= ("ravikumat");
let h= Array.from(g);
console.log(h);

// Array.isArray() is used to check if the given object is an array
let m = [10, 20, 30, 40, 60];
console.log(Array.isArray(m));

// Array.prototype.push() is used to add an element to the end of the array
let o = [10, 20, 30, 40, 60];
o.push(70);
console.log(o);

