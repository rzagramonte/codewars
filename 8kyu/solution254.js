/*
Find the Integral

Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"

Will the parameters always be numbers?
Will the input numbers always be a positive integer?
Will the return always be a string?

console.log(integrate(3,2), "1x^3");
console.log(integrate(12,5), "2x^6");
console.log(integrate(20,1), "10x^2");
console.log(integrate(40,3), "10x^4");
console.log(integrate(90,2), "30x^3");
*/

//declare const variable and assign to arrow function
//return string using template literal, we adding 1 to the exponent, and dividing the coefficient by that new number
const integrate = (coefficient, exponent) => `${coefficient/(exponent+1)}x^${exponent+1}`;