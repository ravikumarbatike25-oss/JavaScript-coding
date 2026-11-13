// Key-value pair format

let user = {
    name: "Tom",
    age: 30,
    city: "LA",
    isActive: true,

    address: {
        flat: 101,
        zip: 545454,
        lat: 10.34,
        long: 11.22,
    },
    emp :{
        name:"ravi",
        age:30,
        role:"QA",
        salary:10000
    },
};
console.log(user);
console.log(user.name); // GET
console.log(user.emp.salary);
console.log(user.address.lat);

console.log(user.age);
console.log(user["city"]);

console.log(user.address.flat);
console.log(user.address.lat);
console.log(user.address["zip"]);

//Null means the value is not present in the object
//in JavaScript, null is a special value that represents the intentional absence of an object/value
// user.emp = null;
// console.log(user.emp.role);


// Create a new key-value pair
user.email = "tom@gmail.com",
user.tel = 9014201720,
console.log(user);

// Delete a pair
delete user.age;
console.log(user);

// Update a pair
user.name = "Tom Automation"; // it will update the value of the key "name"
console.log(user);


let r1 = {
    name: "Ravi",
    age: 30
};

let r2 = {
    name: "Kumar",
    age: 25
};

console.log(r1);
console.log(r2);

r1 = null;

console.log(r1);
console.log(typeof r1);
console.log(r2);