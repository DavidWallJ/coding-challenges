// --- Directions
//
// debug with 'node inspect index.js', command = 'c', command = 'repl'
// set 'debugger', then you can use the window like inspector tool, console to debug
//
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// option 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed;
// }

function reverse(str) {
  // 'reversed' === whatever was returned last iteration
  // '' is the starting value
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

reverse('asdf');
module.exports = reverse;

// this 'reduce' case will loop through the chars in the 'str',
// '+' the character to the the beginning of whatever was returned on the last iteration
// in this case the last iteration will be stored in 'var', 'reversed'
// 'reversed' is set to '' to start
