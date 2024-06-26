/*
Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

Will the parameter always be two arrays?
Will the elements in the array always be numbers?
Will the return always be a number?

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
*/

//declare variable and assign to arrow function
//set parameters
//reduce the two arrays and add their final values
const arrayPlusArray = (arr1, arr2) => arr1.reduce((acc,c)=>acc+c,0) + arr2.reduce((acc,c)=>acc+c,0);