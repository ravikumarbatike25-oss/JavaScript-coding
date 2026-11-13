function enterDeatails(...Aadhar){
    console.log("Aadhar apply: " + Aadhar);
    
 // using for of loop to iterate through the array
    for(let a of Aadhar){
        console.log(a);
    }
}
enterDeatails( "Ravikumar", "H.No:1-79", "Hyderabad", "pin:506001");


// rest parameters in function
// rest parameters is used to pass a variable number of arguments to a function
// ... is used to pass a variable number of arguments to a function
// ...car is used to pass a variable number of arguments to a function

//Call it with the fixed argument first, then any number of cars:
function LearnCar(driverName, ...car){
    console.log("Car: " + car + " " + "driver: " + driverName);

    for (let c of car){
        console.log(c);
    }
}
LearnCar("rk", "Toyota", "Honda", "Ford", "Maruti", "Audi");
LearnCar("kavya", "Toyota", "Honda", "Ford", "Maruti", "Audi", "BMW", "Mercedes");
LearnCar("krish", "Toyota", "Honda", "Ford", "Maruti", "Audi", "BMW", "Mercedes", "Nissan", "Hyundai", "Kia");

// You CANNOT write: function LearnCar(...driverName, ...car)
// Only ONE rest parameter is allowed, and it must be last.
// To use rest for BOTH names, use two functions (one rest each):

function LearnCarAndDrivers(...driverName) {
    return function (...car) {
        console.log("drivers: " + driverName);
        console.log("cars: " + car);

        for (let d of driverName) {
            console.log("driver: " + d);
        }
        for (let c of car) {
            console.log("car: " + c);
        }
    };
}

LearnCarAndDrivers("rk", "kavya")("Toyota", "Honda", "Ford", "Maruti", "Audi");
LearnCarAndDrivers("krish")("Toyota", "Honda", "BMW", "Mercedes");
