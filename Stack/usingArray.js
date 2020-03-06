let stack = [];
let word = "2002";
let rword = "";

for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += stack.pop();
}

if (rword === word) {
  console.log(word, `is a palindrome`);
} else {
  console.log(word, `is not a palindrome`);
}

/*Palindrome without using any methods*/
let str = "freeCodeCamp";
let rvStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  rvStr += str[i];
}
if (rvStr === str) {
  console.log(str, `is a palindrome-2`);
} else {
  console.log(str, `is not a palindrome-2`);
}
