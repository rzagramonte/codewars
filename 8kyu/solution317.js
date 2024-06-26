/*
Leonardo Dicaprio and Oscars

You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"

Will the parameter always be a number?
Will the number always be an integer?
Will the integer always be positive?
Will the return always be a string?

console.log(leo(89),"Leo got one already!");
console.log(leo(88),"Leo finally won the oscar! Leo is happy");
console.log(leo(87),"When will you give Leo an Oscar?");
console.log(leo(86),"Not even for Wolf of wallstreet?!");
*/

//declare constant variable leo which will be assigned to an arrow function
//set parameter oscar
//return correct string based on number input using conditional operator
const leo = oscar => oscar == 88 ? "Leo finally won the oscar! Leo is happy" 
                   : oscar == 86 ? "Not even for Wolf of wallstreet?!"
                   : oscar < 88 ? "When will you give Leo an Oscar?":"Leo got one already!";