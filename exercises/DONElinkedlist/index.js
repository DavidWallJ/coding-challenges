// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // alt: 
    // this.insertAt(data, 0)
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++
      node = node.next;
    }
    return count;
  }

  getFirst() {
    // alt: 
    // return this.getAt(0)
    return this.head;
  }

  getLast() {
    // alt:
    // return this.getAt(this.size() - 1);
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    // remove the link to the head; remove the link to the entire list
    this.head = null;
  }

  removeFirst() {
    // alt:
    // this.removeAt(0);
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // alt:
    // this.removeAt(this.size() - 1);
    if (!this.head) {
      return;
    }
 
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous;
    let node = this.head;
    while (node) {
      previous = node;
      node = node.next;
      if (!node.next) {
        previous.next = null;
        return;
      }
    }
  }

  insertLast(item) {
    // alt:
    // this.insertAt(item, this.size());
    const last = this.getLast();
    const node = new Node(item);
    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(position) {
    let node = this.head;
    let index = 0
    while (node) {
      if (index === position) {
        return node;
      }
      node = node.next;
      index++;
    }
    return null;
  }

  removeAt(position) {
    if (!this.head) {
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(position - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, position) {
    // inserts a new node with data at the 0 index when the list is empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    //inserts a new node with data at the 0 index when the list has elements
    if (position === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // inserts a new node with data at a middle index
    // inserts a new node with data at a last index
    // insert a new node when index is out of bounds
    const previous = this.getAt(position - 1) || this.getLast();
    // previous.next for the 'getLast' scenario will be 'null' as expected
    const node = new Node(data, previous.next);
    previous.next = node;

  }
}
module.exports = { Node, LinkedList };
