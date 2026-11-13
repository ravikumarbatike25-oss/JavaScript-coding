// Array methods
// 1. push() - adds an element to the end of the array
// 2. pop() - removes an element from the end of the array
// 3. shift() - removes an element from the beginning of the array
// 4. unshift() - adds an element to the beginning of the array
// 5. splice() - adds or removes elements from the array
// 6. slice() - returns a new array with a subset of the original array
// 7. concat() - joins two or more arrays and returns a new array
// 8. join() - joins all elements of an array into a string
// 9. reverse() - reverses the order of the elements in the array
// 10. sort() - sorts the elements of the array
let a = [1, 2, 3, 4, 5];
a.push(6); // adds an element to the end of the array
console.log(a);

a.pop(); // removes an element from the end of the array
console.log(a);

a.shift(); // removes an element from the beginning of the array
console.log(a);

a.unshift(0); // adds an element to the beginning of the array
console.log(a);

a.splice(2, 0, 6); // adds or removes elements from the array
console.log(a);

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1, "mango", "pineapple");
console.log(fruits);
//fruits.splice(fruits.length-1, 1, "watermelon", "orange");
//console.log(fruits);
fruits.splice(fruits.length, 2, "watermelon", "orange"); 
console.log(fruits);
fruits.splice(fruits.length, 0, "tea", "coffee"); 
console.log(fruits);

//Interview point of view  indexOf()
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
console.log(num.indexOf(5));
console.log(num.indexOf(9));
console.log(num.indexOf(5, num.indexOf(5)+1)); // second occurence of 5 
console.log(num.indexOf(5,6)); //its also give same as above line but it start searching from index 6

