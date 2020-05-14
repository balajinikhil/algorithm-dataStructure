const conutString = str => {
  let obj = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
};

console.log(conutString("Hello"));

/*palindrome */
const palindrome = str => {
  let ip = str.split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += ip.pop();
  }
  return result == str ? true : false;
};

console.log(palindrome("racecar"));

/*anagrams */
const ana = (str1, str2) => {
  str1 = str1
    .toLowerCase()
    .split(" ")
    .join("");
  str2 = str2
    .toLowerCase()
    .split(" ")
    .join("");

  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str2.indexOf(str1[i]) + 1) {
        continue;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

console.log(ana("orchestra", "carthorse"));

/* non-duplicate arrays */
const sumOfNonDuplicate = arr => {
  let sum = 0;
  let done = [];
  for (let i = 0; i < arr.length; i++) {
    if (done.indexOf(arr[i]) + 1) {
      continue;
    } else {
      sum += arr[i];
      done.push(arr[i]);
    }
  }
  return sum;
};

console.log(sumOfNonDuplicate([2, 2, 1, 3, 3, 4, 5]));
