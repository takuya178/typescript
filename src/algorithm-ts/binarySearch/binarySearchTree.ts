class Binaty {
  value: number;
  left: Binaty | null;
  right: Binaty | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const insert = (node: Binaty | null, value: number): Binaty | null => {
  if (node === null) return new Binaty(value);

  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }

  return node
}

const inorder = (node: Binaty | null) => {
  if (node) {
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  } 
}

const search = (node: Binaty | null, value: number): any => {
  if (!node) return false;

  if (node.value === value) {
    return true;
  } else if (node.value > value) {
    return search(node.left, value);
  } else if (node.value < value) {
    return search(node.right, value);
  }
}

let root = null
root = insert(root, 3)
root = insert(root, 6)
root = insert(root, 5)
console.log(root)