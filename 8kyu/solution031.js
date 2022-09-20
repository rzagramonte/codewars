/*
N-th Power
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N.
You should find the N-th power of the element in the array with the index N.
If N is outside of the array, then return -1.
Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

P.R.E.P.
parameters: an array with positive numbers array and a non-negative number N
return: N-th power of the element in the array with the index N. If N is outside of the array, then return -1
example:
array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
pseudocode:
declare function index
set parameters array and n
if n < array.length, return Math.pow(array[n],n)
else return -1
*/

function index(array, n){
    //your code here
    return array.length > n ? Math.pow(array[n], n) : -1;
  };