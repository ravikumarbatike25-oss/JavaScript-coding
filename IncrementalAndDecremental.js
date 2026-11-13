// //postIncrement = a++; ,post = after a is incremented by 1 and then the value of a is returned 

//IMP : we cant apply icremental and decremental operators on value directly like ++10, --10, etc.
 //We can apply it on variables only. like ++i, --i, i++, i--, etc.
let a=2;
let b=a++;
console.log(b); // 2
console.log(a); // 3

let x=-99;
let y=x++;
console.log(y); // -99
console.log(x); // -98

let total=100;
console.log(total++); // 100
console.log(total); // 101

// //preIncrement = ++a; ,pre = before
let p=2;
let q=++p;
console.log(q); // 3
console.log(p); // 3

let r=-99;
let k=++r;
console.log(k); // -98
console.log(r); // -98

let total1=100;
console.log(++total1); // 101
console.log(total1); // 101

// //postDecrement = a--; ,post = after a is decremented by 1 and then the value of a is returned 
let a1=2;
let b1=a1--;
console.log(b1); // 2
console.log(a1); // 1

let x1=-99;
let y1=x1--;
console.log(y1); // -99
console.log(x1); // -100

let total2=100;
console.log(total2--); // 100
console.log(total2); // 99

// //preDecrement = --a; ,pre = before
// let p1=2;
// let q1=--p1;
// console.log(q1); // 1
// console.log(p1); // 1

// let r1=-99;
// let k1=--r1;
// console.log(k1); // -100
// console.log(r1); // -100

// let amont=15;
// console.log(amount++); // 15
// console.log(amount); // 16
// console.log(amount--); // 16
// console.log(amount); // 15

// let score=300;
// console.log(--score); // 299
// console.log(++score); // 300
// console.log(score++);
// console.log(score); // 301

// let age=50;
// console.log(--age); //49
// console.log(++age); //50
// console.log(age--); //50
// console.log(--age); //49

// let salary=1000;
// console.log(salary++); //1000
// console.log(++salary); //1001
// console.log(salary--); //1001
// console.log(--salary); //1000

// let height=170;
// console.log(height++); //170
// console.log(++height); //171
// console.log(height--); //171
// console.log(--height); //170


// Interview Questions

// let i = 11;
// let j = i++ + ++i; // i++ = 11, ++i = 12, so j = 11 + 12 = 23
// console.log(i); // 13
// console.log(j); // 24

// let o1 = 11;
// let b2 = 22;
// let c2 = o1 + b2 + o1++ + ++o1 + ++b2; // o1++ = 11, ++o1 = 12, ++b2 = 23, so c2 = 11 + 22 + 11 + 12 + 23 = 89
// console.log("o1=" + o1);
// console.log("b2=" + b2);
// console.log("c2=" + c2);


// let i2 = 0;
//  let j1 = i2++ == --i2 + ++i2 - i2--;
//  console.log(j1);
//  console.log(i2);

// let i = 19,
// j = 29,
// k = 9;
// let m = i-- - j-- - k--;
// console.log("i=" + i); // 18
// console.log("j=" + j); // 28
// console.log("k=" + k); // 8
// console.log("m=" + m); // -19

let i =10;
let j  = --(i++);
console.log(i); //Invalid left-hand side expression in prefix operation
console.log(++11); //Invalid left-hand side expression in prefix operation

let m=0; n=0;
let pq = --m * --n * m-- * n--;
console.log(pq); // 1

//BigInteger
let b12=10n;
console.log(++b12); // 11n
console.log(b12++); // 11n

let s=1.5;
let d=2.5;
console.log(++s);// 2.5
console.log(d++);// 2.5

let f=1.5;
let g=2.5;
console.log(++f);// 2.5
console.log(g++);// 2.5

