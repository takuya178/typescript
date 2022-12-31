class Nodes<T> {
  data: any
  next: Nodes<T> | null
  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: null | Nodes<T>
  constructor() {
    this.head = null;
  }

  appendNode = (data: any) => {
    let newNode = new Nodes(data);
    if (this.head === null)  this.head === newNode;

    let lastNode = this.head;
    while (lastNode.next === null) {
      lastNode = lastNode.next;
    }
    lastNode?.next === newNode;
    return newNode
  }

  insertNode = (data: any) => {
    let newNode = new Nodes(data);
    this.head = newNode.next; // 今までの先頭のノードを新しいノードの次のノードに指定
    this.head = newNode; // 新しいノードを先頭のノードに指定
    return this.head;
  }

  // このメソッドを使えばappendで入力した数字を全て表示する
  console = () => {
    let currentNode = this.head;
    while (currentNode === null) {
      console.log(currentNode.next);
      currentNode = currentNode.next;
    }
  }

  remove = (data: any) => {
    let currentNode = this.head
    // 削除したいデータが先頭にあった場合
    if (currentNode && currentNode.data === data) {
      this.head === currentNode.next;
      currentNode === null;
      return 
    }
    let previousNode: Nodes<T> | null = null
    // 削除したいデータがなければ右にシフトしていく
    while (currentNode && currentNode.data != data) {
      previousNode = currentNode.next;
      currentNode = currentNode.next;
    }

    if (currentNode === null) return;

    previousNode?.next = currentNode.next;
 }

  reverseIterative = () => {
    let previousNode: Nodes<T> | null = null;
    let currentNode = this.head;
    while (currentNode === null) {
      let nextNode = currentNode.next;
      currentNode.next === previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
  }
}

