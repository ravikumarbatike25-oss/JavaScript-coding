// 1. map: transform every element of the given array
// returns a new array
let number = [1, 2, 3, 4, 5];

let num = number.map(e => e * 2);
console.log(num);
console.log(number); // original array is not modified

let sqrt = number.map(e => e * e);
console.log(sqrt);

let r = number.map(q => q > 4);
console.log(r);

let w = number.map(w => w % 2 === 0);
console.log(w);

let empNames = ['uday', 'ankita', 'navya', 'senthil'];
let namesUpper = empNames.map(n => n.toUpperCase());
console.log(namesUpper);

let nameupper = ["QA", "AUTOMATION", "DEVOPPS", "MANAGEMENT"]
    let lowername = nameupper.map(up => up.toLowerCase());
    console.log(lowername); // convert all the elements to lowercase


console.log("==================================");

// 2. filter: filter the elements of the given array

// 2. filter:

let numbers = [10, 25, 30, 45, 50, 60];

let grThan30 = numbers.filter(n => n > 30);
console.log(grThan30);

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

let names = ['Naveen', 'Ankita', 'Priyatosh', 'jay', 'om', 'peter'];
let longNames = names.filter(n => n.length > 3);
console.log(longNames);

let productData = [
    'apple macbook',
    'apple iph',
    'samsung galaxy',
    'canon',
    'apple air'
];
// chain the filter and map methods to get the desired output
// filter and map methods use together to get the desired output
let appleProducts = productData
    .filter(p => p.startsWith('apple'))
    .filter(p => p.includes('iph'))
    .map(p => p.replace('iph', 'iPhone'));

console.log(appleProducts);

console.log("==================================");

// 3. reduce: reduce the elements of the given array to a single value

let red =[10,20,30,40,50];
 let qa=red.reduce((sum, x) => sum+x ,20) // sum is the initial value of the accumulator
 console.log(qa);

let ad =["H.NO-1079","Hyderabad", "telangana", "india"];
  let rk=ad.reduce((start, end) => start+end + " " ," ")
  console.log(rk);


//All the methods are used together to get the desired output

let nb =[1,2,3,4,5,6,7,8,9,10];
    let f=nb.filter(nb => nb % 3  ===0) 
       .map(nb => nb * 2)
       .reduce((sum, x) => sum+x ,10)
    console.log(f);
   
