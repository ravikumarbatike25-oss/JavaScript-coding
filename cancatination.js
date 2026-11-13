console.log(1 + 1);
console.log("1" + 1);
console.log("1" + "1"); 
console.log(1 + "1");

// subtraction: -
console.log(1 - "1");
console.log(5 - 2); 
console.log("5" - "2");
console.log(5 - "hello");
console.log('hello' - 10); 
console.log('hello' - '10'); 
console.log('hello' - 0); 

// multiplication: *
console.log(1 * "1"); 
console.log(-1 + "1" * 1); 
console.log(1 + "1" - 2); 

// division: /
console.log(10 / "2"); // 5
console.log("10" / "2"); // 5
console.log(10 + "10" + "2"); // 10102
console.log(10 + "10" + 10); // 101010
console.log(10 + "10" - 10); // 1010 - 10 = 1000


let x = [1, [2, [3, [4, [5, 6]]]]];
let yz = [10];

console.log(x + yz);     