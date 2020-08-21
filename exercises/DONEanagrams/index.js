// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1:
// function anagrams(stringA, stringB) {
//   const stringAMap = buildCharMap(stringA);
//   const stringBMap = buildCharMap(stringB);

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false;
//   }

//   for (let char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// build a character map
// function buildCharMap(str) {
//   let charMap = {};
//   // remove special characters and toLowerCase
//   for (let char of str.replace(/[^\w]/, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// Solution 2:
function anagrams(stringA, stringB) {
  return cleanUpStr(stringA) === cleanUpStr(stringB);
}

function cleanUpStr(str) {
  return str.replace(/[^\w]/, '').toLowerCase().toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
