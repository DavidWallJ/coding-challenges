// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const middleIndex = Math.floor((n * 2 - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < n * 2 - 1; column++) {
//       // if the column index is < the middle index - row (left side)
//       // or the column index is > the middle index + row (right side)
//       // print a ' ', else print '#'
//       if (column < middleIndex - row || column > middleIndex + row ) {
//         level += ' ';
//       } else {
//         level += '#';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  
  const middleIndex = Math.floor((n * 2 - 1) / 2);
  const column = level.length;

  if (column === n * 2 - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  
  let add;
  
  if (column < middleIndex - row || column > middleIndex + row) {
    add = ' '
  } else {
    add = '#'
  }

  pyramid(n, row, level + add);
}
module.exports = pyramid;
