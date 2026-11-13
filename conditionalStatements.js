//IMP: With if conditional statements we get performance and functional issues , so moved to switch statements 
//If Statement if ..if ,,,if 


let marks =85;
// Nested if-else statements
//The inner if can run only after all its parent if conditions have evaluated to true. If any parent if is false, JavaScript skips everything inside that block.
if (marks>=87){
    console.log("A grade");
    if(marks >=90){
        console.log("A+ grade");
        if(marks>=99){
            console.log("eligible for entrance exam"); 
        }
        else{
            console.log("not eligible for entrance exam");
        }
    }
}

else{
if(marks>=85){
    console.log("B grade");
}
else{
    console.log("C grade and try again");
}
}

//---parallel if if if else-----");
//Main disadvantage performance isse
//browser is set to "safari".
//The first three if conditions (chrome, firefox, edge) are false. its checking each if block unnesserly
//if browser="opera" its checking all if blocks unnesserly and then it will print the last else block  
let browser = 'chrome';

if (browser === 'chrome') {
console.log('launch chrome');
}
if (browser === 'firefox') {
console.log('launch firefox');
}
if (browser === 'edge') {
console.log('launch edge');
}
if (browser === 'safari') {
console.log('launch safari');
}
else {
console.log('plz pass the right browser, invalid browser...');
}

// if else-if else-if else-if
//performance issue and for example 20th line is true then it will check the 19 conditions unnesserly
 let browser1 = 'edge';

if (browser1 == 'chrome') {
    console.log('launch chrome');

} else if (browser1 == 'firefox') {
    console.log('launch firefox');

} else if (browser1 == 'edge') {
    console.log('launch edge');

} else if (browser1 == 'safari') {
    console.log('launch safari');
} 
else {
    console.log('Invalid browser');
}
