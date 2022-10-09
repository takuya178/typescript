class Link {
  data: any
  nextNode: null
  constructor(data: any, nextNode: null) {
    this.data = data;
    this.nextNode = nextNode;
  }
} 

class LinkedList {
  head: null
  constructor(head: null) {
    this.head = head
  }

  // reverseIterative = () => {
  //   let previous_node = null;
  //   let currentNode = this.head;

  //   while(currentNode === null) {
  //     let nextNode = currentNode.nextNode;
  //   }
  // }
}
