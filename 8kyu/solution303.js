/*
A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

Our friend Pac has finally decided to pursue a career in the coding industry.
He is a newbie, he needs to learn properly.
Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' Academy for beginners.
In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
He has been sent an email from the Academy with the following instructions,

Dear Pac,  
This is the first exercise. Find out what's wrong and fix the code.  
You have 15 minutes to send a solution.  
Good Luck.
This code is a mess! Would you help Pac to fix the code in time?

(This might be helpful -> Math.random();)

This is my first Kata, so please any feedback (especially on Test Cases) is welcome!

Will there be no input?
Will the return always be a string?
*/

//declare constant variable which will be assigned to an arrow function
//if random number is less than or equal to 0.32 return "FrontEnd Developer"
//else if random number is less than or equal to 0.65 return "Backend Developer"
//else return "Full-Stack Developer"
const yourFutureCareer = () => Math.random() <= 0.32 ? "FrontEnd Developer"
                             : Math.random() <= 0.65 ? "BackEnd Developer"
                             : "Full-Stack Developer";
yourFutureCareer();