// ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multidimensionalarray = [[], [], []];


// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

var multidimensionalarray = [[], [], []];
multidimensionalarray[0].push(0, 1, 2, 3);
multidimensionalarray[1].push(1, 0, 1, 2);
multidimensionalarray[2].push(2, 1, 0, 1);
console.log(multidimensionalarray);


// 3. Write a program to print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user
// program to generate a multiplication table
var number = +prompt("Enter a number")
for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
}


// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


for (var i = 1; i <= 15; i++) {
    document.write(i);
}
for (var i = 10; i >= 1; i--) {
    document.write(i);
}

for (var i = 0; i <= 20; i += 2) {
    document.write(i);
}

for (var i = 1; i <= 19; i += 2) {
    document.write(i);
}
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k");
}



// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search");
if (arr == "userinput"){
    alert("item is found")
}
else {
    alert("ïtem is not found")
}

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].

var largestNum = [24, 53, 78, 91, 12];
document.write("Array Items : " + largestNum + "<br>");
var largest= 0;
for (i=0; i<=largest;i++){
    if (largestNum[i]>largest) {
        var largest=largestNum[i];
    }
}
document.write("The largest number in an array is :" +largest + "<br>" + "<br>");





// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


var smallestNum = [24, 53, 78, 91, 12];
document.write('Array Items : ' + smallestNum + '<br>');
var smallest= 0;
for (i=0; i>=smallest;i++){
    if (smallestNum[i]>smallest) {
        var smallest=smallestNum[i];
    }
}
document.write("The smallest number in an array is : " + smallest + "<br>" + "<br>");



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (var i = 1; i < 100; i++) {
    if (i % 5 === 0) {
      if (i < 100) {
        document.write(i + ",")
      } else {
        document.write(i)
      }
    }
  }



