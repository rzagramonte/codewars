/*
Closest elevator

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

Will the parameters always be three numbers?
Will the three input numbers always be valid integers between 0-2?
Will the return always be a string?
Will the string always be either "left" or "right"?

console.log(elevator(0,1,0), 'left');
console.log(elevator(0,1,1), 'right');
console.log(elevator(0,1,2), 'right');
console.log(elevator(0,0,0), 'right');
console.log(elevator(0,2,1), 'right');
*/

//declare a constant variable and assign it to an arrow function
//if the absolute value of call - right is less than or equal to the absolute value of call - left
//return "right"
//else return "left"
const elevator = (left, right, call) => Math.abs(call-right)<=Math.abs(call-left) ? "right" : "left";