// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 


// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

function power(a, b) {
    let result = Math.pow(a, b);
    console.log(a + b + result);
}

var a = 2;
var b = 3;
power(a, b);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, 

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        alert(year + "is a leap year");
    } else {
        alert(year +  "is not a leap year");
    }
}

let year1 = 2020;
isLeapYear(year1);


// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateS(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
}

function calculateArea(a, b, c) {
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("The area of the triangle is" + area);
}


let a = 3;
let b = 4;
let c = 5;
calculateArea(a, b, c);


// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.


function calculatePercentage(number, total) {
    var percentage = (number / total) * 100;
    return percentage;
}

function mainFunction(mark1, mark2, mark3) {
    var average = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(average, 100);
    console.log("The average is" + average + "  and the percentage is" + percentage);
}


let mark1 = 80;
let mark2 = 70;
let mark3 = 90;
mainFunction(mark1, mark2, mark3);

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.
function customIndexOf(string, character) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1;
}

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countSuccessiveVowels(text) {
    let count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var char1 = text[i];
        var char2 = text[i + 1];
        switch (char1) {
            case 'a':
                if (char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u') {
                    count++;
                }
                break;
            case 'e':
                if (char2 === 'a' || char2 === 'i' || char2 === 'o' || char2 === 'u') {
                    count++;
                }
                break;
            case 'i':
                if (char2 === 'a' || char2 === 'e' || char2 === 'o' || char2 === 'u') {
                    count++;
                }
                break;
            case 'o':
                if (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'u') {
                    count++;
                }
                break;
            case 'u':
                if (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o') {
                    count++;
                }
                break;
        }
    }
    return count;
}

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

var distanceInKm = 50;

function kilometersToMeters(distanceInKm) {
    return distanceInKm * 1000;
}

function kilometersToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
}

function kilometersToInches(distanceInKm) {
    return distanceInKm * 39370.1;
}

function kilometersToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
}
console.log("Distance in meters:" + kilometersToMeters(distanceInKm));
console.log("Distance in feet:" + kilometersToFeet(distanceInKm));
console.log("Distance in inches:" + kilometersToInches(distanceInKm));
console.log("Distance in centimeters:" + kilometersToCentimeters(distanceInKm));

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var hoursWorked = prompt("Enter the number of hours worked:");
var hourlyWage = prompt("Enter the hourly wage:");

if (hoursWorked > 40) {
  var overtimeHours = hoursWorked - 40;
  var overtimePay = overtimeHours * 12.00;
  var regularPay = 40 * hourlyWage;
  var totalPay = regularPay + overtimePay;
  console.log("The employee's total pay is Rs." + totalPay);
} else {
  var totalPay = hoursWorked * hourlyWage;
  console.log("The employee's total pay is Rs." + totalPay);
}

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
let amount = prompt("Enter the amount to be withdrawn in hundreds:");
let num_100_notes = parseInt(amount / 100);
let remaining_amount = amount % 100;
let num_50_notes = parseInt(remaining_amount / 50);
remaining_amount = remaining_amount % 50;
let num_10_notes = parseInt(remaining_amount / 10);

console.log("Number of 100 rupee notes:" + num_100_notes);
console.log("Number of 50 rupee notes:" + num_50_notes);
console.log("Number of 10 rupee notes:" + num_10_notes);