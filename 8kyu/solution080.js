/*
Man in the west
A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

Will the parameter always be an array?
Will the return always be a boolean of true or false?

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
console.log(checkTheBucket([]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);
*/
const checkTheBucket = bucket => bucket.includes('gold');