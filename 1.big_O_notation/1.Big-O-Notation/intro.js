/*sum of numbers from 1 to n including n */

//1. Loop aproach

const addUpTo = n => {
  let num = 0;
  for (let i = 0; i <= n; i++) {
    num += i;
  }
  return num;
};
let t1 = Date.now();
console.log(`loop:`, addUpTo(1000000000));
let t2 = Date.now();
console.log(`loop total time : ${(t2 - t1) / 1000} seconds`);

/*2.using formula */

const addUpToF = n => {
  return (n * (n + 1)) / 2;
};

let t3 = Date.now();
console.log(`formula:`, addUpToF(1000000000));
let t4 = Date.now();
console.log(`formula time: ${(t4 - t3) / 1000} seconds`);
