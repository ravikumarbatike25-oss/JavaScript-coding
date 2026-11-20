// for loop
let num = [10, 20, 30, 40, 60];
 for(let i=0; i<=num.length-1; ++i){  // if we use only <= then we should use num.length-1
    console.log(num[i]);
    num[5]= 50;
    
 }
 console.log(num.length);

 let rk = ["Ravi", "kumar", "kavya", "Tom", "joy"];
 for(let i=0; i<rk.length; ++i){ // if we use only < then we should use rk.length
    console.log(rk[i]);
 }

 console.log(rk.length);
 rk[4]= "lucky";
 console.log(rk);

 // for loop in reverse order

 let t=["Ravi", "kumar", "kavya", "Tom", "joy"];
  for(let i=t.length-1; i>=0; --i){
  console.log(t[i]);
  }

  // for loop in reverse order and store the result in a new array
  let r=["Ravi", "kumar", "kavya", "Tom", "joy"]; 
   let res =[];
   for(let i=r.length-1; i>=0; --i){
      res.push(r[i]);
   }
   console.log(res);
   
 // for 'of' loop
 // for of  will give all array elements one by one in forward direction
 let ck = [10, 20, 30, 40, 50, "Ravi", "kumar"];
  for(let d of ck){
   //  if (typeof d === "number"){
   //      console.log("hike 10%");
   //      break;
   //  }
    console.log(d);
    console.log(typeof(d)); //Number,String
  }

  // for in loop, will give the index of the array elements
  let kl = ["Ravi", "kumar", "kavya", "Tom", "joy"];
 for(let l in kl){
    //console.log(l);
    console.log(l +'=' +kl[l]);
    console.log(typeof(l)); // string
 }

 
