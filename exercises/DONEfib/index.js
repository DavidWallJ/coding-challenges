// --- Directions
//
// debug with 'node inspect index.js', command = 'c', command = 'repl'
// set 'debugger', then you can use the window like inspector tool, console to debug
//
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// runtime complexity: linear

// function fib(n) {
//   let series = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series[n];
// }

// recursive solution #1
// function fib(n, series = [0, 1], iteration = 2) {
  // if (n < 2) {
  //   return n;
  // }

  // if (series.length === n + 1) {
  //   return series[n];
  // } 

  // series.push(series[iteration - 1] + series[iteration - 2]);

  // return fib(n, series, iteration + 1);
// }

// recursive solution #2 (slow)
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// recursive solution #2 (fixed with memoization)
function memoize(fn) {
  const cache = {};
  // we're using '...' so we can passing in multiple arguments
  // even though this question only passes in a single argument
  return function(...args){
    // before we call slowFib we'll check if the result of slowFib(n)
    // has been called and cached before
    // the key value for the cached result with be the arguements 'slowFib' was called with
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn.apply(this, args);

    return cache[args];
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
