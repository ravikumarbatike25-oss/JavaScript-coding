let user ={
    name: "ravikumar",
    age:32,
    role:'QA',
    salary:12,
    company:"IBM",
    

shift(){
console.log("shift timings are 9:00 AM to 5:00 PM");
},

travelling(){
    console.log("travelling to the office");
}
};
user.shift();
user.travelling();
console.log(user.name);
console.log(user.age);
console.log(user.role);
console.log(user.salary);
console.log(user.company);

// object with functions
// this keyword is used to refer to the current object
let userLogin ={
    username1:"ravikumar",
    password1:"qa12345@",
    username2:"admin",
    password2:"admin12345@",
    
    login(){
        console.log("login using username: " + this.username1 + " and password: " + this.password1);
        this.reset();
    },
    logout(){
        console.log("logout successful");
    },
    reset(){
        console.log("reset password for username: " + this.username1 + " and password: " + this.password1);
    },
};

userLogin.login();
userLogin.logout();
