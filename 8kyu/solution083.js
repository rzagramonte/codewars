/*
Parse nice int from char problem

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

Will the parameter always be a string?
Will the return always be a number?

console.log(getAge("4 years old"), 4);
*/

//declare const variable and assign to arrow function
//set parameter
//return the first element as a number
const getAge = inputString => parseInt(inputString[0]);