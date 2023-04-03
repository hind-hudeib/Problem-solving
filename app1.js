// function that returns the minimum element in a stack in constant time complexity.

function getMinInStack(stack) {
  let min = stack[0];
  for (let i = 1; i < stack.length; i++) {
    if (stack[i] < min) {
      min = stack[i];
    }
  }

  return min;
}

const stack = [10, 12, 3, 8, 15, 6, 7, 18, 23, 20];
getMinInStack(stack);


// Given a queue of integers, reverse the order of the elements in the queue.

function reverse(queue) {
  const reversed = [];

  while (queue.length > 0) {
    reversed.push(queue.pop());
  }

  return reversed;
}

const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversed = reverse(queue);
console.log(reversed);





// Javascript program to implement Queue using two stacks with costly enQueue()  
class Queue {

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(x);

    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
  }

  deQueue() {

    if (this.s1.length == 0) {
      document.write("Q is Empty");
    }

    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");
document.write(q.deQueue() + "<br>");


// Create a function that takes a LinkedList and deletes the middle node in it and returns it.


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(newNode) {
    let node = this.head;
    if (node == null) {
      //Means it's just empty list
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

   deleteMiddleNode(linkedList) {
    if (!linkedList.head || !linkedList.head.next) {
      // LinkedList is empty or has only one node
      return null;
    }
    
    let slow = linkedList.head;
    let fast = linkedList.head;
    let prev = null;
    
    // Use a slow pointer and a fast pointer to find the middle node
    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    
    // Remove the middle node from the LinkedList
    prev.next = slow.next;
    
    // Return the removed node
    return slow;
  }

  reversesList(){
    let previous = null;
    let current = this.head;
    while (current !== null) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;

    }
    return previous;
    
  } 
}

const list = new LinkedList();

const n1 = new Node("a");
const n2 = new Node("b");
const n3 = new Node("c");
const n4 = new Node("d");
const n5 = new Node("e");
const n6 = new Node("f");


list.insert(n1);
list.insert(n2);
list.insert(n3);
list.insert(n4);
list.insert(n5);
list.insert(n6);


console.log(list.deleteMiddleNode(list));
console.log(list.reversesList());

