let user ={
    name:"ravi",
    age:30,
    city:"Hyderabad",
    country:"india",  
}

function employee(userObj){
    userObj.age=20; //updating 
    userObj.city="Mumbai"; //Updating
    userObj.contact=9876543210; //Adding new property
}
employee(user);
console.log(user);
console.log(user.name);
