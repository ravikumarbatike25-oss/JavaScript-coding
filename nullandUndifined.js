let user={
    name: "Ravikumar",
    age:32,
    role:"QA",
    salary:12000,
    company:"IBM",
    
    }
 // console.log(user.name);
//   user =null;
//   console.log(user.company);//Cannot read properties of null
  user =undefined;
  // ?. is used to check if the object is null or undefined and if it is then it will not throw an error
  console.log(user?.role);//undefined
  console.log("executed successfully");


  