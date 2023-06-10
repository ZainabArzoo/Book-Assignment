// MATH EXPRESSIONS


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;



// 3. Write a program that takes input a name from user &
// greet the user.
var yourname = prompt("please enter your name")
alert("welcome to our website " + yourname)


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var number = prompt("Enter a number");
if (isNaN(number)) {
  number = 5;
}

document.write(`<h2>Multiplication Table of ${number}</h2>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${number} x ${i} = ${number * i}<br>`);
}




// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var totalMarks = 100;
var subject1Name = prompt("Enter name of subject 1");
var subject2Name = prompt("Enter name of subject 2");
var subject3Name = prompt("Enter name of subject 3");

var subject1Marks = +prompt("Enter marks obtained in" + subject1Name);
var subject2Marks = +prompt("Enter marks obtained in" + subject2Name);
var subject3Marks = +prompt("Enter marks obtained in" + subject3Name);

var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (obtainedMarks / (totalMarks * 3)) * 100;

document.write(`<table>
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>${subject1Name}</td>
    <td>${totalMarks}</td>
    <td>${subject1Marks}</td>
    <td>${(subject1Marks / totalMarks) * 100}%</td>
  </tr>
  <tr>
    <td>${subject2Name}</td>
    <td>${totalMarks}</td>
    <td>${subject2Marks}</td>
    <td>${(subject2Marks / totalMarks) * 100}%</td>
  </tr>
  <tr>
    <td>${subject3Name}</td>
    <td>${totalMarks}</td>
    <td>${subject3Marks}</td>
    <td>${(subject3Marks / totalMarks) * 100}%</td>
  </tr>
  <tr>
    <td></td>
    <td>${totalMarks * 3}</td>
    <td>${obtainedMarks}</td>
    <td>${percentage}%</td>
  </tr>
</table>`);



































