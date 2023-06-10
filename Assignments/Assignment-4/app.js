// VARIABLE NAMES: LEGAL & ILLEGAL

// Declare 3 variables in one statement.
var a = 1, b = 2, c = 3;


// Declare 5 legal & 5 illegal variable names

// legal:
// lastName (camel case)
// Lastname()
// last-name (snake-case)
// myname1,my1name (Numbers)
// -,& (only used this symbols)
// illegal: 
// n a m e (spaces)
// #name (symbols)
// 1name4 (number in start)
// let,var (reserved keywords)


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var a = "Variable names can only contain numbers, $ ,_ For example: $my_1stVariable."
var b = "Variables must begin with a letter, $ or _. For example $name, _name or name"
var c = "Variable names are case sensitive"
var d = "Variable names should not be JS keywords"
document.write("<h1>Rules for naming JS variables<h1>" + a + "<br>" + b + "<br>" + c + "<br>" + d)

