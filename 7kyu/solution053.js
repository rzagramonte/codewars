/*
"Center yourself", says the monk.

Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

Task
Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

center(strng, width, fill=' ')
If the left and right padding cannot be of equal length make the padding on the left side one character longer.

If strng is longer than width return strng unchanged.

Examples
center('a', 3)  # returns " a "
center('abc', 10, '_')  # returns "____abc___"
center('abcdefg', 2)  # returns "abcdefg"

Will the parameters always be a string, a number, and a second optional string?
Will the return always be a string?

console.log(center("a", 3, ' '), " a ");
console.log(center("a", 3), " a ");
console.log(center("", 3, '_'), "___");
console.log(center("abc", 10, '_'), "____abc___");
console.log(center("____abc___", 10, '_'), "____abc___");
console.log(center("abcdefg", 2, ' '), "abcdefg");
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//if the length of strng is greater than width, return strng
//else return fill repeated using the following expression => width minus length of strng divided by 2 and rounded up plus strng plus fill repeated using the following expression => width minus length of strng divided by two
const center = (strng, width, fill = ' ') => strng.length > width ? strng : fill.repeat(Math.ceil((width-strng.length)/2)) + strng + fill.repeat((width-strng.length)/2);