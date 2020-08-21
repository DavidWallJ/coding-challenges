// --- Directions
//
// debug with 'node inspect index.js', command = 'c', command = 'repl'
// set 'debugger', then you can use the window like inspector tool, console to debug
//
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// option 1 *best*
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }

// option 2 
// not the best because it will iterate over the entire str
// when you really only need to it iterate over half of it
function palindrome(str) {
  // check that 'char' === str.length at current iteration 'i', '-1' to get the correct index
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;

// NOTE: 'every' loop through and return 'true' if every iteration matches condition
// else return false
// NOTE: 'every' can provide an 'i'. you can use it to compare the chars from end-to-end