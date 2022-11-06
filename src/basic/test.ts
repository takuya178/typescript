// class Binaty {
//   value: number;
//   left: Binaty | null;
//   right: Binaty | null;
//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const insert = (node: Binaty | null, value: number): Binaty | null => {
//   if (!node) return new Binaty(value);

//   if (value < node.value) {
//     node.left = insert(node.left, value);
//   } else {
//     node.right = insert(node.right, value);
//   }

//   return node
// }

// let root = null
// root = insert(root, 3)
// root = insert(root, 6)
// console.log(root)