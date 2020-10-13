// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
};

function levelWidth(root) {
  const counters = [0];
  const arr = [root, 's'];

  while(arr.length > 1) {
    // take the first node (from left side)
    const node = arr.shift();
    if (node === 's') {
      arr.push('s');
      counters.push(0)
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
