// IMP: Named export vs Default export
// Named export: export { user, qa }  --> many per file, import MUST use { }
// Default export: export default function Employee()  --> only ONE per file
// Default is a normal function; "default" only means "main export of this file"
// Import default WITHOUT { }:  import Employee from "./utiles.js"
// You can rename default freely:  import Worker from "./utiles.js"  (still Employee)
// Import named WITH { } and same name:  import { qa, dev } from "./utiles.js"
// Mix both:  import Employee, { qa, dev } from "./utiles.js"
// Do NOT put default inside { } unless you also did: export { Employee }

let neme ="Ravikumar";

let user ={
    name: "Ravikumar",
    age: 25,
    city: "Chennai",
    country: "India",
    email: "ravikumar@gmail.com",
    phone: "1234567890",
    address: "123, Main St, Anytown, USA",
    zip: "12345",
    state: "TN",
    country: "India",
    email: "ravikumar@gmail.com",
};

function qa(){
    console.log("I am a QA Engineer");
    return "QA Engineer";
};

function dev(){
    console.log("I am a Developer");
    return "Developer";
};

function manager(){
    console.log("I am a Manager");
    return "Manager";
};

export default function Employee(){ // only one default per file
    console.log("I am a default employee");
    return "default employee";

};
 
function add(a,b){
    return a + b;
}
export { user, qa, dev, manager}; // named exports — imported with { }