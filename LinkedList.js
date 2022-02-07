// ------- Linked List ---------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    var current = this.head;
    console.log('Value', current.value);
    while (current.next !== null) {
      current = current.next;
      console.log('Value', current.value);
    }
  }

  // Append new node at the end
  append(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Prepend new node at the end
  prepend(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // remove node with matching value
  remove(value) {
    if (this.head === null) {
      return;
    } else {
      if (this.head.value === value) {
        this.head = this.head.next();
      }
      var current = this.head;
      while (current.next !== null || this.current.next.value !== value) {
        current = current.next;
      }
      current.next = current.next.next;
    }
  }

  reverse() {
    console.log(this.head);
    var prev = null;
    var current = this.head;
    var next = null;
    while (current.next !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    console.log(this.head);
  }
}

let LinkedListEx = new LinkedList();
LinkedListEx.append(10);
LinkedListEx.append(20);
LinkedListEx.append(30);
LinkedListEx.prepend(5);
//console.log(LinkedListEx.traverse());
console.log(LinkedListEx.reverse());
