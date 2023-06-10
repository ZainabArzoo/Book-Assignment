// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 


// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).# take user input character

var input = prompt("Enter a character");
if (!isNaN(input)) {
    alert("The input is a number.");
}
else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
    alert("The input is an uppercase letter.");
}
else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
    alert("The input is a lowercase letter.");
}
else {
    alert("");
}
 

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1 = +prompt("Enter the first number")
var num2 = +prompt("Enter the second number")
if(num1 > num2){
    alert("")
} else if(num2 > num1){
    alert("The larger number is" +  num);
} else {
    alert("The two numbers are equal");
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.// Ask the user for a number
var number = +prompt("Please enter a number:");
if (number > 0) {
  alert("The number is positive");
} 
else if (number < 0) {
  alert("The number is negative");
} 
else {
  alert("The number is zero");
}


// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
var character  = prompt("Enter a character");
if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
    alert("The character is a vowel");
}
else {
    alert("The character is not a vowel");
}



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwiseAI

var correctPassword = "password";
var userPassword = prompt("Please enter your password");
if (userPassword == "") {
  alert("Please enter your password");
} 
else if (userPassword == "correctPassword") {
  alert("Correct! The password you entered matches the original password");
} 
else {
  alert("Incorrect password");
}




// 6. This if/else statement does not work. Try to fix it:
// var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
    greeting = "Good evening";
}


// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


var time = +prompt("Enter the time in 24-hour clock format 1900=7pm");

if (time >= 0000 && time < 1200) {
  alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
  alert("Good evening!");
}
else if (time >= 1700 && time < 2100) {
  alert("Good afternoon!");
}
else if (time >= 2100 && time < 2359) {
  alert("Good night!");
}
else {
  alert("")
}



