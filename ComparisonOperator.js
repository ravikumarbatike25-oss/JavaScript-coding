// == (equal to) == is used to compare the value of two variables
//true =1, false =0 , null =0, undefined =0, NaN =0, Infinity =1, -Infinity =1
console.log(1 == 1); // true
console.log(1 == "1"); // true
console.log(1 == "2"); // false
console.log(1 == true); // true 
console.log(1 == false); // false 
console.log(1 == null); // false
console.log(1 == undefined); // false because undefined is not a number
console.log(1 == NaN); // false because NaN is not a number
console.log(1 == Infinity); // false,  because Infinity is not a number
console.log(1 == -Infinity); // false,  because -Infinity is not a number
console.log(1 == 0); // false 
console.log(1 == 1); // true 
console.log(0 == false); // true because 0 is equal to false
console.log(0 == true); // false because 0 is not equal to true
console.log("Ravi" == "ravi"); // false, Javascript is case sensitive

// === (equal to) === is used to compare the value and type of two variables
console.log(1 === 1); // true
console.log(1 === "1"); // false
console.log(1 === "2"); // false
console.log(1 === true); // false  
console.log(1 === false); // false because true and false are not the same type
console.log(1 === null); // false because null is not a number
console.log(1 === undefined); // false because undefined is not a number
console.log(1 === NaN); // false, because NaN is not a number
console.log(1 === Infinity); // false because Infinity is not a number
console.log(1 === -Infinity); // false, because -Infinity is not a number
console.log(1 === 0); // false because 0 is not a number
console.log(1 === 1); // true,because 1 is the same type as 1
console.log("Ravi" === "ravi"); // false, Javascript is case sensitive
console.log(0 === false); // false because 0 is not equal to false


