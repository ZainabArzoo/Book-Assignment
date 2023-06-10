// DATE METHODS

// 1. Write a program that displays current date and time in 
// your browser.
var currentDate = new Date();
document.write("Current date and time: " + currentDate);

// 2. Write a program that alerts the current month in words. 
// For example December.
// Get the current date
var currentDate = new Date();
var monthNumber = currentDate.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthName = monthNames[monthNumber];
alert(monthName);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var today = new Date().getDay();
let alertMessage = days[today];
alert(alertMessage);

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
let currentDayOfWeek = new Date().getDay();
if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
alert("It's Fun day!");
} else {
alert("Today is not a Fun day.");
}


// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
var today = new Date();
var date = today.getDate();
if (date < 16) {
  console.log("First fifteen days of the month");
} 
else {
  console.log("Last days of the month");
}

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.
var today = new Date();
var minutes = (today.getTime() - new Date("January 1, 1970 00:00:00").getTime()) / (1000 * 60);
console.log("Minutes since Jan. 1, 1970: " + minutes);

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.
var today = new Date();
var hours = today.getHours();
if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}


// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

var laterDate = new Date(2020, 11, 31);
document.write("<br>Later date: "+laterDate);


// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var ramadanStart = new Date(2015, 5, 18);
var today = new Date();
var daysPast = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
alert(daysPast + " days have passed since 1st Ramadan.");


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.
var referenceDate = new Date("Jan 01, 2015");
var currentTime = new Date();
var secondsElapsed = Math.floor((currentTime - referenceDate) / 1000);
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);




// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
console.log(currentDate);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentYear - 100);
alert(currentDate);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
var age = +prompt("What is your age?");
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age;
console.log("Your birth year is" + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month





