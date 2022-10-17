// 「?」を使ってパラメータを省略可能と指定することができる。
const log = (message: string, userId?: string) => {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in')
}

const log2 = (message: string, userId = 'Not signed in') => {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId);
}

// デフォルトパラメータ
type Context = {
  appId?: string
  userId?: string
}
const log3 = (message: string, context: Context = {}) => {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, context.userId)
}


// レストパラメータ
const sumVariadicSafe = (...numbers: number[]): number => {
  return numbers.reduce((total, n) => total + n, 0);
}



//旅行を予約するためのAPI
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation 
  (from: Date, destination: string): Reservation // 日帰り旅行
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // 宿泊旅行を予約する
  } else if (typeof toOrDestination === "string") {
    // 日帰り旅行を予約する
  }
}



// JSでfilterを定義するとこうなる、
const filter = (array: number[], f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}
filter([1,2,3,4], _ => _ < 3);

// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[]
//   (array: string[], f: (item: string) => boolean): string[]
//   (array: object[], f: (item: object) => boolean): object[]
// }

// 上のfilterをジェネリックを用いてTS風に書き直す。
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

const filterTs: Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}
filterTs([1,2,3,4], _ => _ < 3);
filterTs(['a', 'b'], _ => _ !== 'b');
let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
]
filterTs(names, _ => _.firstName.startsWith('b'));



// mapの型定義
const map = <T, U>(array: T[], f: (item: T) => U): U[] => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result;
} 
