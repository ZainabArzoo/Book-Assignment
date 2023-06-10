// MATH EXPRESSIONS

// . Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var result = num1 + num2
document.write("<br>" + "sum of 3 and 5 is " + result)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 3;
var num2 = 5;
var result = num1 - num2
document.write("<br>" + "subtraction of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 * num2
document.write("<br>" + "multipication of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 / num2
document.write("<br>" + "division of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 % num2
document.write("<br>" + "modulus of 3 and 5 is " + result)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var num =
document.write("<br>" + "</br>" + "Value after variable declaration is: " + num + "<br>");
var num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

var movieticket = "600"
var result = movieticket * 5
document.write("<br>" + "<br>" + "Total cost to buy 5 tickets to a movie is " + result + "PKR")


// 5. Write a script to display multiplication table of any 
// number in your browser.

for (var i=1; i<=10; i++){
    document.write("<br>"  + "2 x " + i + " = " + 2*i)
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write("<br>" + "<br>" + celsius + "°C is " + fahrenheit + "°F");
document.write("<br>" + fahrenheit2 + "°F is " + celsius2 + "°C");


// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

var price1 = 650;
var price2 = 100;
var price1quantity = 3;
var price2quantity = 7;
var shippingcharges = 100;
var total = (price1*3)+(price2*7)+shippingcharges;
document.write("<h1>shopping cart</h1>"  + "price of item 1 is " + price1 + "<br>" + "Quantity of item 1 is " +  price1quantity + "<br>" + "price of item 2 is" + price2 + "<br>" + "Quantity of item 2 is" + price2quantity + "<br>" + "shipping charges" + shippingcharges + "<br>" + "Total cost of your order is " + total)


// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

var totalmarks = 980
var obtainedmarks = 804
var percentage = 804/980*100
document.write("<h1>Marksheet</h1>"  + "Total Marks: " + totalmarks + "<br>" + "Obtained Marks: " + obtainedmarks + "<br>" + "Percentage: " + percentage + "%")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usdollars = 10;
var SaudiRiyals = 25;
var Exchangerates1 = 104.80;
var Exchangerates2 = 28;
var total = (usdollars * Exchangerates1)+(SaudiRiyals * Exchangerates2);
document.write("<h1>currency in PKR</h1>" + "Total currency in Pakistani Rupees: " + total);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num1 = 3
var num2 = ((5 + 7) * 10) / 2;
document.write("</br>" + "</br>" + "The value after arithmetic is: " + num2);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

var currentyear = 2023
var birthyear = 2002
var result = currentyear - birthyear
document.write("<h1>Age calculator</h1>" + "Current Year:" + currentyear)
document.write("<br>" + "Birth Year:" + birthyear)
document.write("<br>" + "Your age is:" + result)



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = Math.PI * 2 * radius;
var area = Math.PI * radius * radius;
document.write("<h1>Age Geometarizer</h1>" + "Radius of circle " + radius);
document.write("<br>" + "The circumference is " + circumference);
document.write("<br>" + "The area is " + area);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favsnack = "choclatechip";
var currentage = 15;
var maxage = 65;
var amount = 3;
var result = (maxage-currentage) * 365 * amount;
document.write("<h1>The Life Time Supply Calculator</h1>"  + "favorite snack: " +  favsnack + "<br>" + "current age: " + currentage + "<br>" + "Estimated maximum age " + maxage + "<br>" + "Amount of snack per day " + amount + "<br>" + "you will need " + result + " choclate chip to last you until the ripe old age of " + maxage)




