class car {

    // instance variables
    min_speed = 100;
    // static variables
    static wheel_count =4;
    
    //Private variables
     // private variables are accessed using the # symbol
    // private variables are not accessible outside the class
   // private variables are not accessible to the child classes
   // private variables are not accessible to the parent classes
   // private variables are not accessible to the objects
   // private variables are not accessible to the static methods
  // private variables are not accessible to the instance methods
 // private variables are not accessible to the static variables
 // private variables are not accessible to the instance variables

 //private variable
     #pin = "1234555";
//get method to access the private variable
     getpin(){
        return this.#pin;
     }
 //private method
    #EngineNumber(){
        console.log("Engine Number is 09999");
    }
//get method to access the private method
    getEngineNumber(){
        this.#EngineNumber();
    }

    start(){
        console.log("Car is starting...");
        this.getpin();
    }

    stop(){
        console.log("car is stop")
    }
    playMusic(){
        console.log("Car is playing music...");
        this.getEngineNumber();
    }
}

//Outside the class
let car2 = new car();
//console.log(car2.#pin); // private variables are not accessible outside the class to over come this we have to use the "get method"
console.log(car2.getpin()); // private variables are accessible outside the class to over come this we have to use the "get method" is called encapsulation 
car2.start(); // private variables are not accessible outside the class
car2.playMusic();

//Inheritance 
class TATA extends car {
    start(){
        console.log("TATA car is starting...");
    }
   Autoparking(){
    console.log("TATA car is doing autoparking...");
   }
   AutomaticGearChange(){
    console.log("TATA car is doing automatic gear change...");
   }
}

// let tata =new TATA();
// tata.AutomaticGearChange();
// tata.start();

class BMW extends car {
    min_speed = 150;
    start(){
        console.log("BMW car is starting...");
    }
    autoparking(){
        console.log("BMW car is doing autoparking...");
    }
    AutoseatAdjustment(){
        console.log("BMW car is doing automatic gear change...");
    }
}

// let bmw =new BMW();
// bmw.AutoseatAdjustment(); 
// bmw.start();

export {car,TATA,BMW};