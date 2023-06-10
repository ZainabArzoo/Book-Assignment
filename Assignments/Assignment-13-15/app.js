// ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentanames = []

// 2. Declare an empty array using JS object notation to store
// student names in future.
var students = {
    snames: []
};


// 3. Declare and initialize a strings array.
let subjects = ["english", "urdu", "Math's"];

// 4. Declare and initialize a numbers array.
let numbers = ["1", "2", "3"]

// 5. Declare and initialize a boolean array.
let boolean = [true, false]

// 6. Declare and initialize a mixed array.
let mixedarr = ["english", "1", true]


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:
var arr =["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
document.write(arr)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
var studentname = ["sarah", "yumna", "irda"]
var score = ["495", "480", "490"]
let totalMarks = 500;
for (let i = 0; i < studentname.length; i++) {
  var percentage = (score[i] / totalMarks) * 100;
  console.log(studentname[i] + "score" + score[i] + "marks" + percentage + "%");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["blue", "white", "black"];
document.write("Initial array:" + colors + "<br>");
var colorToAddToBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddToBeginning);
document.write("Array after adding" + colorToAddToBeginning + "to the beginning:" + colors + "<br>");
var colorToAddToEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddToEnd);
document.write("Array after adding" + colorToAddToEnd + "to the end:" +  colors + "<br>");
colors.unshift("purple", "red");
document.write("Array after adding two more colors to the beginning:" +  colors + "<br>");
colors.shift();
document.write("Array after deleting the first color:" +  colors + "<br>");
colors.pop();
document.write("Array after deleting the last color:" + colors + "<br>");
var indexToAddColor = prompt("Enter an index to add a color:");
var colorToAddAtIndex = prompt("Enter a color to add at the index:");
colors.splice(indexToAddColor, 0, colorToAddAtIndex);
document.write("Array after adding" + colorToAddAtIndex + "at index" + indexToAddColor + colors + "<br>");
var indexToDeleteFrom = prompt("Enter an index to delete color(s) from:");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDeleteFrom, numberOfColorsToDelete);
document.write("Array after deleting" + numberOfColorsToDelete + "color(s) from index" + indexToDeleteFrom + colors + "<br>");





// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
var studentscore = ["70", "85", "90"]
studentscore.sort()


// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
var citiesarr = ["karachi", "lahore", "faislabad"]
var selectedCitiesarr = citiesarr.slice(0, 3);






// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var arr2 = arr.join(" ");
console.log(arr2);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
var myarr1 = [];
myarr1.push("keyboard");
myarr1.push("mouse");
myarr1.push("printer");
myarr1.push("monitor");

for (let i = 0; i < myarr1.length; i++) {
  console.log(myarr1[i]);
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last Index First Out
var myarr2 = [];
myarr2.push("keyboard");
myarr2.push("mouse");
myarr2.push("printer");
myarr2.push("monitor");
myarr2.reverse();
console.log(myarr2);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:   

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value=" + phoneManufacturers[i] + ">" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


