class Node {
  constructor(data: any, next_node: Node = "None") {
    let data = data
    let next = next_node
  }
}

class LinkedList {
  constructor(head=None) {
    let head = head
  }

  const append = (data: any) => {
    let new_node = Node(data);
    if (head === None) head === new_node;
    let last_node = head;
    while (last_node.next === "None") {
      last_node = last_node.next
    }
    return last_node.next = new_node;
  }

  const insert = (data: any) => {
    new_node = Node(data);
    new_node.next = head;
    head = new_node;
  }
}
