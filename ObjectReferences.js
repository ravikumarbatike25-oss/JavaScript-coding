let r1 = {
    name: "ravi",
    age: 30,
    role: "QA",
    salary: 10000,
};


let r2= {
    name: "kavya",
    age:27,
    role:"developer",
    salary:15000
};

let r3={
    name:"tom",
    age:30,
    role:"manager",
    salary:20000
};
 let r4={};

console.log(r1);
console.log(r2);
console.log(r3);
console.log(typeof(r1));

r1=r2;
console.log(r1);
console.log(r2);
console.log(r3);

r2=r3;
console.log(r1);
console.log(r2);
console.log(r3);

r3=r1;
console.log(r1);
console.log(r2);
console.log(r3); 


console.log(r4);
r4=r1;
console.log(r4);