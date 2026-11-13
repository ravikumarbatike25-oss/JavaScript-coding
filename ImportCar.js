import {car ,TATA, BMW} from "./Inheritance.js";

let Tata = new TATA();
Tata.start();
Tata.AutomaticGearChange();
Tata.Autoparking();
Tata.playMusic();
console.log(Tata.min_speed); // instance variables are accessed using the object name
console.log(TATA.wheel_count); // static variables are accessed using the class name



let Bmw  = new BMW();
Bmw.start();
Bmw.AutoseatAdjustment();
Bmw.autoparking();
Bmw.playMusic();
console.log(Bmw.min_speed); // instance variables are accessed using the object name
console.log(BMW.wheel_count); // static variables are accessed using the class name

let car1 = new car();
car1.start();