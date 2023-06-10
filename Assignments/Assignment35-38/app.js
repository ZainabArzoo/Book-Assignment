// FUNCTION

// 1. Write a function that displays current date & time in your 
// browser.

function DateTime() {
  var currentDate = new Date();
  var currentTime = currentDate.toLocaleTimeString();
  document.write(currentDate + currentTime);
}
DateTime();


// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

function hello() {
  var firstName = prompt("What is your first name");
  var lastName = prompt("What is your last name");
  var fullName = firstName + lastName;
  document.write("Wellcome to our website " + fullName);
}
hello();

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function addNumbers() {
    var num1 = +prompt("Enter the first number");
    var num2 = +prompt("Enter the second number");
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers();
alert("The sum of the two numbers is " + result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.



// 5. Write a function that squares its argument.

function square(num) {
    return num * num;
}
console.log(square(5));

// 6. Write a function that computes factorial of a number.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

var result = factorial(5);
console.log(result);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function count(start, end) {
    var output = "";
    for (var i = start; i <= end; i++) {
        output += i + " ";
    }
    document.write(output);
}
count(1, 10);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

// Call the calculateHypotenuse function with a base and a perpendicular.
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write("The hypotenuse of a right triangle with base" + base + " and perpendicular" + perpendicular + "is" + hypotenuse);


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculateRectangleArea(width, height) {
    let area = width * height;
    return area;
}

let area1 = calculateRectangleArea(5, 10);
console.log(`The area of a rectangle with width 5 and height 10 is ${area1}.`);
let width = 3;
let height = 7;
let area2 = calculateRectangleArea(width, height);
console.log(width + height + area2);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}
var str1 = "the quick brown fox";
var capitalizedStr1 = capitalizeWords(str1);
document.write("The capitalized string of " + str1 + " is " + capitalizedStr1);


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
var str1 = "Web Development Tutorial";
var longestWord1 = findLongestWord(str1);
document.write("The longest word in " + str1 + "is" + longestWord1);


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
var str1 = "JSResourceS.com";
var letter1 = "o";
var numOccurrences1 = countOccurrences(str1, letter1);
document.write("The letter " + letter1 + " occurs" +  numOccurrences1 + "times in" + str1);



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log(circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log(area);
}

var radius1 = 5;
calcCircumference(radius1);
calcArea(radius1);


