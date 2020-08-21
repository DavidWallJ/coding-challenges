// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let count = 0;
//   let criteria = ['a', 'e', 'i', 'o', 'u'];
//   for (let letter of str.toLowerCase()) {
//     if (criteria.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

module.exports = vowels;
