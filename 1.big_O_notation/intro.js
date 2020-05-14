/**
  Big O Notation
    Allows us to compare code and decide the best performing code

  - Need
    >Performance of code
    >Discuss trade off between diff approach
    >Inefficent code points

 - Better Approach
    >Faster execution
    >less memory intensive
    >more readable

//FASTER
    
P1. Sum of numbers from 1 to n

 */

const addUptoN = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
};

let t1 = Date.now();
console.log(addUptoN(10000000));
let t2 = Date.now();
console.log(`execution time: ${(t2 - t1) / 1000} sec`);

console.log(`//`);

const addUptoN1 = (n) => {
  return (n * (n + 1)) / 2;
};

let t3 = Date.now();
console.log(addUptoN1(10000000));
let t4 = Date.now();
console.log(`execution time: ${(t4 - t3) / 1000} sec`);

console.log(`//`);

/*
As seen from above example

- Disadv Of time
    >Diff machine executes diff time
    >Same machine executes at diff time
    >Fast algorithms, speed measurement isn't effective

 - Overcome disadv of time
    >Count number of operations machine has to execute,
    it remains same regardless of machine


from 1st case
 for loop corresponds n times the opertaion so it takes total of 5n+2 operations
 i.e operations inside for loop is executed n times

from 2nd case
 only 3 mathematically operations are done

*/

/*
Big O is a way to normalize fuzzy counting, how runtime of algorithm grows as n grows

Defenition
    We say algorithm is O(f(n)) if the number of simple operations computer has to do is eventually
    less than a constant times f(n), as n increases
    
Types
    >linear O(n)    as n grows no. of ops grow n times
    >constant O(1) as n grows no. of ops remain same
    >quadratic O(n^2) as n grows no. of ops grow n^2 times
    >something diff

*/
console.log(`//`);

const countUpAndDown = (n) => {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
};

countUpAndDown(5);
/*In above example 1st for loop is O(n) and second for loop is O(n) which adds upto O(2n) */

console.log(`//`);

const printAllPairs = (n) => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(`[${i},${j}]`);
    }
  }
};

printAllPairs(1);
console.log(`//`);
/*In this example we see quadtratic operations of big O
1st for loop is O(n) and inside that another for loop is O(n) --> O(n) * O(n) = O(n^2)
*/

/*
Simplifying Big O
Rules
    >Constants dosen't matter
        i.e O(2n) == O(n)
            O(5000) == O(1)
            O(10n^2) == O(n^2)    
    
    >Smaller terms dosen't matter
        i.e O(n+100) == O(n)
            O(n^2 + 5n + 1000) == O(n^2)

Shorthand
    >Airthmetic ops are contant
    >Variable assignment is const
    >Acessing ele in arr or obj using key is const
    >loop complexity is length times wteva happens inside the loop

*/
console.log(`//`);
const logAtleast5 = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

logAtleast5(3);
/* The big O is O(n), the big O remains constant till it reaches 5 and increase linear after 5
 */
console.log(`//`);

const logAtMost5 = (n) => {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

logAtMost5(6);
console.log(`//`);
/*
The big O is O(1), the big O increases linear till it reaches 5 and becomes constant after it reaches 5
*/

//SPACE COMPLEXITY
/*
The actually space of input grows as the value of the input grows, but that is ignored, we discuss about 

AUXILARY SPACE COMPLEXITY
    >Space of the algorithm as input n grows is ASC

- Rules
>primitive datatypes have constant space O(1)
>String size grows as the lenght of the string grows O(n) n is length of the str
>Reference datatypes (Arrays and Objects), grows as lenght grows O(n)

P. Sum of all elements of the array
 */
console.log(`//`);

const sumOfArr = (arr) => {
  let result = 0; //O(1)
  for (let i = 0; i < arr.length; i++) {
    //O(1)
    result += arr[i];
  }
  return result;
};

console.log(sumOfArr([10, 15, 20]));
/*Big O is O(1) as there are only two variables assigned as numbers */

console.log(`//`);

const multiplyArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

console.log(multiplyArr([1, 2, 3]));
console.log(`//`);
/*Big O is O(n), as the result length grows according to the length of the input array */

/*
//LOGARITHMS
Log is inverse of exponent

log2(8) = 3 == 2^3 = 8

-Uses of logn or nlogn Big O
    >Searching algortihm (time complexity)
    >Sorting algorithm
    >Reccursion (space complexity)
*/
