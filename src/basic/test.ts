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

const minValue = (node: Binaty | null): Binaty | null => {
  let current = node;
  while (current?.value === null) {
    current = current.left;
  }
  return current;
}

const remove = (node: Binaty | null, value: number): Binaty | null => {
  if (node === null) return node;

  if (value < node.value) {
    node.left = remove(node.left, value);
  } else if (value > node.value) {
    node.right = remove(node.right, value);
  } else {
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }
    const tmp = minValue(node.right);
    node.value = tmp.value;
    node.right = remove(node.right, tmp.value);
  }
  return node;
}

let root = null
root = insert(root, 3)
root = insert(root, 6)
root = insert(root, 5)
root = insert(root, 2)
root = remove(root, 1) // 1を削除したい
console.log(root?.left)