// USER INPUT & CONDITIONAL STATEMENT 


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var cityname = prompt("Enter your city name")
if (prompt == "karachi") {
    alert("Welcome to city of lights")
}
else {
    alert("")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender")
if (gender == "male") {
    alert("Good Morning Sir")
}
else if (gender == "female") {
    alert("Good Morning Ma’am.")
}
else {
    alert("")

}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt("Enter color of raod traffic signal")
if (color == "red") {
    alert("must stop")
}
else if (color == "yellow") {
    alert("ready to move")
}
else if (color == "green") {
    alert("move now")
}
else {
    alert("")
}


//   4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var remainingfuel = prompt("Enter ramaining fuel of you car")
if (remainingfuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("fuel is full")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }




// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
const totalMarks = 300;
var subject1Marks = +prompt("Enter marks obtained in subject 1")
var subject2Marks = +prompt("Enter marks obtained in subject 2")
var subject3Marks = +prompt("Enter marks obtained in subject 3")

var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
  grade = "A+";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to better";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("Total Marks:" + totalMarks);
document.write("Obtained Marks:" + obtainedMarks);
document.write("Percentage:" + percentage%);
document.write("Grade:" + grade);
document.write("Remarks:" + remarks);




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretNumber = 3
var guessNumber = +prompt("guess the secret number")
if (guessNumber == secretNumber) {
    alert("Bingo! Correct answer")
}
else if (guessNumber == secretNumber) {
    alert("Close enough to the correct answer")
}
else {
    alert("")
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var number = +prompt("Enter a number")
if (number % 3 == 0) {
    alert("number is divisible by 3")
}
else {
    alert("number is not divisible by 3")
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.num = int(input("Enter a number: "))
var num = +prompt("Enter a number")
if (num % 2 == 0) {
    alert("number is even")
}
else {
    alert("number is odd")
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.
var temperature = +prompt("enter the temperature")
if (temperature > 40) {
    alert("It is too hot outside")
}
else if (temperature > 30) {
    alert("The weather today is normal")
}

else if (temperature > 20) {
    alert("Today's weather is cool")
}

else if (temperature > 10) {
    alert("OMG! Today's weather is so cool")
}
else {
    alert("")
}


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var num1 = +prompt("enter a first number")
var num2 = +prompt("enter a second number")
var operations = prompt("Enter operation +, - ,* ,/ ,%")
if (operations == "+") {
    result = num1 + num2
}
else if (operations == "-") {
    result = num1 - num2
}
else if (operations == "*") {
    result = num1 * num2
}
else if (operations == "/") {
    result = num1 / num2
}
else if (operations == "%") {
    result = num1 % num2
}
else {
    alert("")
}
alert(result)