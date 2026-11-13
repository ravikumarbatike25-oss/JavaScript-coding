//String Manifulation:
//String is a sequence of characters.
//String is a primitive data type.
//String is a collection of characters.

//ASCII value of a single character
// ==========================================
// STRING MANIPULATION IN JAVASCRIPT
// ==========================================

let text = "   Welcome to JavaScript Automation   ";


// 1. length
console.log(text.length);
// Output: 40


// 2. trim()
// Removes spaces from beginning and end
let trimmedText = text.trim();

console.log(trimmedText);
// Output: Welcome to JavaScript Automation


// 3. toUpperCase()
console.log(trimmedText.toUpperCase());
// Output: WELCOME TO JAVASCRIPT AUTOMATION


// 4. toLowerCase()
console.log(trimmedText.toLowerCase());
// Output: welcome to javascript automation


// 5. includes()
// Checks whether the string contains "JavaScript"
console.log(trimmedText.includes("JavaScript"));
// Output: true


// 6. charAt()
// Gets character at a specific index
console.log(trimmedText.charAt(0));
// Output: W


// 7. indexOf()
// Finds the position of "JavaScript"
console.log(trimmedText.indexOf("JavaScript"));
// Output: 12


// 8. slice()
// Extracts characters from index 0 to 6
// End index 7 is NOT included
console.log(trimmedText.slice(0, 7));
// Output: Welcome


// 9. slice() with negative index
// Gets the last 10 characters
console.log(trimmedText.slice(-10));
// Output: Automation


// 10. substring()
// Extracts characters from index 0 to 6
console.log(trimmedText.substring(0, 7));
// Output: Welcome


// 11. replace()
// Replaces "JavaScript" with "Playwright"
let replacedText = trimmedText.replace("JavaScript", "Playwright");

console.log(replacedText);
// Output: Welcome to Playwright Automation


// 12. split()
// Converts string into an array
let words = trimmedText.split(" ");

console.log(words);
// Output: [ 'Welcome', 'to', 'JavaScript', 'Automation' ]


// Access array elements after split()
console.log(words[0]);
// Output: Welcome

console.log(words[1]);
// Output: to

console.log(words[2]);
// Output: JavaScript

console.log(words[3]);
// Output: Automation


// 13. concat()
// Combines two strings
let firstName = "Ravi";
let lastName = "Kumar";

let fullName = firstName.concat(" ", lastName);

console.log(fullName);
// Output: Ravi Kumar


// 14. + operator
let city = "Hyderabad";

let message = "Hello " + city;

console.log(message);
// Output: Hello Hyderabad


// 15. Template literal
let name = "Ravi";
let company = "Newfold";

console.log(`My name is ${name} and I work at ${company}`);
// Output: My name is Ravi and I work at Newfold


// ==========================================
// EMAIL STRING MANIPULATION
// ==========================================

let email = "  Ravi.Batike@GMAIL.COM  ";


// trim() + toLowerCase()
let cleanEmail = email.trim().toLowerCase();

console.log(cleanEmail);
// Output: ravi.batike@gmail.com


// split() - get username
let username = cleanEmail.split("@")[0];

console.log(username);
// Output: ravi.batike


// split() - get domain
let domain = cleanEmail.split("@")[1];

console.log(domain);
// Output: gmail.com


// includes() - check email domain
console.log(cleanEmail.includes("@gmail.com"));
// Output: true


// ==========================================
// URL STRING MANIPULATION
// ==========================================

let url = "https://staging.resellerclub.com/signup";


// includes()
console.log(url.includes("resellerclub"));
// Output: true


// startsWith()
console.log(url.startsWith("https"));
// Output: true


// endsWith()
console.log(url.endsWith("/signup"));
// Output: true


// replace()
let newUrl = url.replace("staging", "www");

console.log(newUrl);
// Output: https://www.resellerclub.com/signup


// split()
let urlParts = url.split("/");

console.log(urlParts);
// Output: [ 'https:', '', 'staging.resellerclub.com', 'signup' ]


// Get domain from URL
console.log(urlParts[2]);
// Output: staging.resellerclub.com


// Get page name
console.log(urlParts[3]);
// Output: signup


// ==========================================
// ASCII EXAMPLE
// ==========================================

let character = "S";

console.log(character.charCodeAt(0));
// Output: 83


// ASCII to character
console.log(String.fromCharCode(83));
// Output: S

console.log("A:", "A".charCodeAt(0));  // 65
console.log("Z:", "Z".charCodeAt(0));  // 90

console.log("a:", "a".charCodeAt(0));  // 97
console.log("z:", "z".charCodeAt(0));  // 122

console.log("0:", "0".charCodeAt(0));  // 48
console.log("9:", "9".charCodeAt(0));  // 57

console.log("Space:", " ".charCodeAt(0)); // 32
console.log("$:", "$".charCodeAt(0));      // 36

//concat:
console.log("hello".concat(" ", " Selenium", " Automation"));


//padding:
console.log("7".padStart(3, 0));
console.log("7".padEnd(3, 0));

console.log("7".padEnd(3, " hi"));
console.log("7".padEnd(7, "hello"));

//replace:

console.log("hi hi".replace("hi", "hey"));
console.log("hi hi".replaceAll("hi", "hey"));

let dob = "01-01-1990"; //01/01/1990
console.log(dob.replaceAll("-", "/"));


