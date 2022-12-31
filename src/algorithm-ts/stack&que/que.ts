class Que {
  private list: number[] = [];

  constructor(list: number[]) {
    this.list = list;
  }

  append = (num: number) => {
    this.list.push(num);
  }

  deque = () => {
    if (this.list.length) {
      return this.list.shift();
    }
  }
}