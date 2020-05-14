/*O(1) space */

const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum([1, 2, 3, 4]));

/*O(n) space length of new array grows as the input grows */
const sumArr = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};

console.log(sumArr([1, 2, 3]));
