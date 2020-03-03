/*1.linear  f(n)=n*/

const addUpTo = n => {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num += i;
  }
  return num;
};

console.log(`linear: `, addUpTo(10000));

/*2.qudratic f(n) = n^2 
print all pairs of n */

const printPairs = n => {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(`quadratic:`, i, j);
    }
  }
};

printPairs(5);

/*constant f(n) = n
 */

const conAdd = n => {
  return (n * (n + 1)) / 2;
};

console.log(`constant`, conAdd(3));

/*counting up and down -- linear */

const countingUpAndDown = n => {
  for (let j = n; j >= 0; j--) {
    console.log(j);
  }
  console.log(`counting down`);

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

countingUpAndDown(3);
