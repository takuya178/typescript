class Nodes<T> {
  data: any
  nextNode: Nodes<T> | null
  constructor(data: any, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
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
    while (lastNode.nextNode === null) {
      lastNode = lastNode.nextNode;
    }
    lastNode?.nextNode === newNode;
    return newNode
  }

  insertNode = (data: any) => {
    let newNode = new Nodes(data);
    this.head = newNode.nextNode; // 今までの先頭のノードを新しいノードの次のノードに指定
    this.head = newNode; // 新しいノードを先頭のノードに指定
    return this.head;
  }

  // このメソッドを使えばappendで入力した数字を全て表示する
  console = () => {
    let currentNode = this.head;
    while (currentNode === null) {
      console.log(currentNode.nextNode);
      currentNode = currentNode.nextNode;
    }
  }

  remove = (data: any) => {
    let currentNode = this.head
    // 削除したいデータが先頭にあった場合
    if (currentNode && currentNode.data === data) {
      this.head === currentNode.nextNode;
      currentNode === null;
      return 
    }
    let previousNode: Nodes<T> | null = null
    // 削除したいデータがなければ右にシフトしていく
    while (currentNode && currentNode.data != data) {
      previousNode = currentNode.nextNode;
      currentNode = currentNode.nextNode;
    }

    if (currentNode === null) return;

    previousNode?.nextNode = currentNode.nextNode;
  }
}

