/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15

P.R.E.P.
parameter(s): two numbers
return: on number
examples:
input => output
(0, 4) => 8
(3, 6) => 15
(2, 5) => 12
pseudocode:
declare function
set parameters
return position + roll * 2
*/

function move (position, roll) {
    // return the new position
    return position + roll * 2;
  }