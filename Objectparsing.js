//JS object ---> JSON string : serialization (marshalling) JSON.stringify()
//JSON string ---> JS object : de-serialization (unmarshalling) JSON.parse()

//API automation:
//POST call: url,json
//user object in JS ----> JSON String
//JSON : Javascript object notation
//api response (JSON) ---> JS Object

let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true
};

//JS object to JSON serialization
//JSON.stringify() : converts JS object to JSON string
let userJson = JSON.stringify(user, null, 1); // null is the replacer, 1 is the space
console.log(userJson);
console.log(typeof userJson + ":" + "JSON is in string format");
console.log("--------------------------------");

//JSON string to JS object de-serialization
 let userObj= JSON.parse(userJson);
 console.log(userObj);
 console.log(typeof userObj+ ":" + "JS object is in object format");


 //Total two objects are created one is JS object and other is JSON string
console.log(user.name === userObj.name); // true because both are same
console.log(user === userObj); // false because both are different objects because they are different references