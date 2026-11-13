//while loop is used to repeat a block of code until a condition is met.
//break statement is used to exit the loop.
let j = 1;
while (j <= 50) { //condition
console.log(j); // 1
if (j % 5 == 0) {
 console.log('hello');
 break; //break statement is used to exit the loop.
}
j++; // 2
}


let k = 1;
while (k <= 50) { //condition
console.log(k); // 1
if (k % 5 == 0) {
 console.log('hello');
}
k++; // 2
break;
}

let r=1;
while(r<=10){
    console.log(r);
    //r++;
    if (r === 5){
        console.log('hello');
        break;
    }
    ++r;
}
console.log(r); 


//For loop is used to repeat a block of code a specific number of times.
 for(let i=1; i<=10; i++){
    console.log(i);
 }

for(let i=10; i>=1; i--){
    console.log(i);
}

let l=1;
for ( ; l<=10; l++){
    console.log('hello');
}
console.log(l);

//*****Imp : Interviw Question , it will give hello rk infinite times.
for ( ; ; ){
    console.log('hello rk')
}

//*************do while loop *************
let m=1;
do{
    console.log(m); // 1,2,3,4,5,6,7,8,9,10
    m++; // 2,3,4,5,6,7,8,9,10,11
}
while (m<=10);


let y=1;
do{
    y++;  // 2,3,4,5,6,7,8,9,10,11
    console.log(y);    // 2,3,4,5,6,7,8,9,10,11

}
while(y<=10);








