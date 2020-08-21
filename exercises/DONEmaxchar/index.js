// --- Directions
//
// debug with 'node inspect index.js', command = 'c', command = 'repl'
// set 'debugger', then you can use the window like inspector tool, console to debug
//
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar;

  // for/of use with strings and arrays
  // 1) create an object with char as key and value as number of occurances
  for (let char of str) {
    chars[char] ? chars[char]++ : chars[char] = 1;
  }

  // for/in use with objects 
  // 2) if value is > previously iterated values, assign it to 'max'
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

module.exports = maxChar;
