class Stack {
  // オブジェクトを書く。
  data: number[]
  constructor() {
    this.data = [];
  }

  push(num: number) {
    this.data.push(num);
  }

  pop() {
    if(this.data.length) {
      this.data.pop();
    }
  }
}


// Input {'key1': 'value1', 'key2': [1,2,3], 'key3': (1,2,3)} Output True
// Input {`key1`: [`value1`, 'key2': [1,2,3], 'key3': (1,2,3)} Output Fae