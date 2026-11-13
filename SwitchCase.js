//IMP: Switch case is used to check the value of the variable and then execute the code accordingly
//we use a switch statement when we want to execute different blocks of code based on the value of a single expression.
// it is more efficient than if else statements
// Case senitive ex: if we pass Chrome instade of chrome it will not execute the code
//Switch case allow duplicate cases , but it will execute the code only once ,line no 20 and 21 are same case but it will execute the code only once but A 'default' clause cannot appear more than once in a 'switch' statement
//IMP: Default case is optional and it is executed if no case is matched , BY using "switch (browser.trim().toLowerCase()){"
//IMP: Break is optional and it is used to break the switch case
//IMP: Break is used to break the switch case and if we don't use break then it will execute the next case
// code execute after the default case also ,if we have any case after default case then it will execute the code after the default case

let browser ="Opera";

 switch (browser.trim().toLowerCase()){
    case "chrome":
        console.log("launch chrome");
        break;

    case "firefox":
        console.log("launch firefox");
        break;

    case "firefox":
        console.log("launch firefox");
        break;

    case "edge":
        console.log("launch edge");
        break;

    case "safari":
        console.log("launch safari");
        break;

    default:
        console.log("Invalid browser");
        break;

    case  "opera":
        console.log("launch opera");
        break;
 }
 console.log("bye");



 // nested switch case

 let env = 'qa';
let username = 'admin';

switch (env) { //outer switch case
    case 'qa':
        console.log('run tcs on qa env'); 

        switch (username) { //nested switch case
            case 'admin':
                console.log('login with admin');
                break;
            case 'user':
                console.log('login with user');
                break;
            default:
                console.log('invalid username');
                break;
        }

    break;

default:
        console.log('run tcs on dev env');
        break;
}