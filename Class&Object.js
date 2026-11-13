class Employee {
    // class is a blueprint of object or template of object
// class variables (properties) like: name, age, salary, isPerm
    name;
    age;
    salary;
    isPerm;

    // constructor is a special method that is used to initialize objects
    // constructor is called when a new object is created
    // constructor is used to initialize the properties of the object
    // constructor is called automatically when a new object is created
    // only one constructor per class is allowed in java script
    constructor(name, age, salary, isPerm) {
        this.name = name; // this is a reference to the current object
        this.age = age; // this is a reference to the current object
        this.salary = salary;
        this.isPerm = isPerm;
    }

    // methods are the functions that are used to perform actions on the object
    // methods are used to perform actions on the object  
    study() {
        console.log(`${this.name} is studying here...`);
    }

    getInfo() {
        console.log( `${this.name}, ${this.age}, ${this.salary}, ${this.isPerm}`);
    }
}

// Object of Employee class using new keyword
// new keyword is used to create a new object of the class
// new keyword is used to call the constructor of the class
// new keyword is used to return the new object of the class
// new keyword is used to assign the new object to a variable
let e1 = new Employee('Tom', 30, 12.33, true);
console.log(e1.name, e1.age);
e1.study();
e1.getInfo();