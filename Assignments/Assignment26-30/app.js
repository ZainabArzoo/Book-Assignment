// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var positivenumber = prompt("Enter a positive integer");
document.write(positivenumber);
document.write("Round off value: " + Math.round(positivenumber));
document.write("Floor value: " + Math.floor(positivenumber));
document.write("Ceil value: " + Math.ceil(positivenumber));


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var negativenumber = prompt("Enter a nrgative integer");
document.write(negativenumber);
document.write("Round off value: " + Math.round(negativenumber));
document.write("Floor value: " + Math.floor(negativenumber));
document.write("Ceil value: " + Math.ceil(negativenumber));




// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num = -4;
var absoluteValue = Math.abs(num);
console.log("The absolute value of" + num + absoluteValue);

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:
var dice = Math.floor(Math.random() * 6) + 1;
console.log("The value of the dice is" + dice)




// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var coinToss = Math.random() * 2 ;
var coinTossFloor = Math.floor(coinToss)
document.write(coinTossFloor + "<br>");
if(coinTossFloor == "2")
    document.write("heads");
else if(coinTossFloor == "1"){
    document.write("Tails");
}


// 6. Write a program that shows a random number between 1 
// and 100 in your browser.
// Generate a random number between 1 and 100
var number = Math.floor(Math.random() * 100) + 1;
document.write("Random number " + number);


// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var weight = prompt('Enter weight in kilograms '); 
if (weight.substr(3) == "" || weight.substr(3) == "kg" || weight.substr(2) == "kg" || weight.substr(5) == "kgs" || weight.substr(4) == "kgs" || weight.substr(5) == "kilograms" || weight.substr(4) == "kilograms"){
    document.write("The weight of user is : " + a + "kilogram " + "<br>");
}





// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

var secretNumber = 3
var userInput = +prompt("Guess the secret number between 1 and 10")
if (userInput == secretNumber) {
  alert("Congratulations! You guessed the secret number correctly!");
} 
else {
  alert("Please try again!");
}

