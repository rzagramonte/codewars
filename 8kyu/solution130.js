/*
Object Oriented Piracy

Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

You begin with writing a generic Ship class / struct:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
var titanic = new Ship(15, 10);
Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
This Kata teaches you the very basics of method creation.

Good luck!

Will the parameters always be a positive number?
Will the method always return a boolean of true and false?
(0,0) => false
(15,20) => false
(35,20) => false
(35,10) => false
(100,20) => true
*/

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   //YOUR CODE HERE...
   //assign a function to the Ship class using prototype
   //return draft weight minus crew weight times 1.5 > 20 using the this keyword
   Ship.prototype.isWorthIt = function(){
    return this.draft - (this.crew * 1.5)> 20;
  } 
   