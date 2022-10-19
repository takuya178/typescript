// class Animal {}

// class Bid extends Animal {
//   chirp() {}
// }

// class Crow extends Bird {
//   caw() {}
// }

// const chirp = (bird: Bird): Bird => {
//   bird.chirp()
//   return bird;
// }



// constアサーション
let aa = { x: 3 } // {x: number}
let bb: { x: 3 } // {x: 3}
let cc = { x: 3 } as const // {readonly x:3}

let dd = [1, {x: 2}]
let e = [1, {x: 2}] as const



// 型の絞り込み
type Unit = 'cm' | 'px' | '%'
let units: Unit[] = ['cm', 'px', '%']
const parseUnit = (value: string): Unit | null => {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i];
    }
  }
  return null;
}
// これでユーザーから渡されたwidthの値を、parseUnitを使って解析することができる。
type Width = {
  unit: Unit,
  value: number
}

const parseWidth = (width: number | string | null | undefined): Width | null => {
  if (width === null) {
    return null;
  }

  if (typeof width === 'number') {
    return {unit: 'px', value: width}
  }

  let unit = parseUnit(width)
  if (unit) {
    return {unit, value: parseFloat(width)}
  }

  return null;
}





// タグ付き合併型
// 「type」というタグをつけて分岐させる。
type UserTextEvent = {type: 'TesxtEvent', value: string, target: HTMLInputElement}
type UserMouseEvent = {type: 'MouseEvent', value: [number, number], target: HTMLElement}

type UserEvent = UserTextEvent | UserMouseEvent

const handle = (event: UserEvent) => {
  if (event.type === 'TesxtEvent') {
    event.value;
    event.target;
    return
  }
  event.value
  event.target;
}



// 完全性
type Weekday = 'Mon' | 'Tue' | 'Web' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

const getNextDay = (w: Weekday): Day => {
  switch (w) {
    case 'Mon': return 'Thu'; 
    case 'Tue': return 'Web'; 
    case 'Web': return 'Thu'; 
    case 'Thu': return 'Fri'; 
    case 'Fri': return 'Sat'; 
  }
}




type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}
// 上のAPIから取得し、それを表示する
const getAPIResponse = (): Promise<APIResponse> => {
  // ...
}
const renderFriendList = (friendList: unknown) => {
  // ...
}

let response = await getAPIResponse();
renderFriendList(response.user.friendList);

// friendListの型は何にしたらいいの？
type FriendList = {
  count: number
  friends: {
    firstName: string
    lastName: string
  }[]
}

type APIResponse2 = {
  user: {
    userId: string
    friendList: FriendList
  }
}

const renderFriendList2 = (friendList: FriendList) => {
}
// このやり方でもいいが、それぞれの方に対して名前を考える必要があるので微妙。

// ここでルクアップすることができる。
type FriendList2 = APIResponse['user']['friendList'];

const renderFriendList3 = (friendList: FriendList2) => {
}





// keyof演算子
// type ResponseKeys = keyof APIResponse
// type Userkeys = keyof APIResponse['user'];
// type FriendListKeys = keyof APIResponse['user']['friendList'];


// const get = <O extends object, K extends keyof O>(
//   o: O,
//   k: K
// ): O[K] => {
//   return o[k];
// }

// // keyofとルックアップを組み合わせると、型安全なゲッター関数を実装することができる。
// type ActivityLog = {
//   lastEvent: Date
//   events: {
//     id: string
//     timestamp: Date
//     type: 'Read' | 'Write'
//   }[]
// }

type User = {
  id: number;
  name: string;
  note?: string;
};
type APIResponses = {
  user: User;
  isPremiumUser: boolean;
};

const extractFromAPIResponse = <T, U extends keyof T>(
  obj: T,
  key: U
): T[keyof T] => {
  return obj[key];
};

const sampleData: APIResponses = {
  user: {
    id: 1,
    name: "Alice",
  },
  isPremiumUser: true,
};
console.log(extractFromAPIResponse(sampleData, "user"));
//{id: 1, name: "Alice"}

console.log(extractFromAPIResponse(sampleData, "isPremiumUser"));
//true





// レコード型
// Weekdayの全てのプロパティにキーが含まれていなくちゃいけない。
type Weekday2 = 'Mon' | 'Tue' | 'Web' | 'Thu' | 'Fri'
type Day2 = Weekday | 'Sat' | 'Sun'
let nextDay: Record<Weekday2, Day2> = {
  Mon: 'Tue'
}



// マップ型
// マップ型を使うと便利。ルックアップ型とそれらを組み合わせると、どの値の方がどのキーの名前に対応するかを制約できる。
type Account = {
  id: number
  isEmployee: boolean
  notes: string[]
}

// 全てのフィールドを省略可能にする
type OptionalAccount = {
  [K in keyof Account]?: Account[K]
}

// 全てのフィールドをnull許容にする
type NullableAccount = {
  [K in keyof Account]: Account[K] | null
}

// 全てのフィールドを読み取り専用にする
type ReadonlyAccount = {
  readonly [K in keyof Account]: Account[K]
}

// 全てのフィールドを再び書き込み可能にする
type Account2 = {
  -readonly [K in keyof ReadonlyAccount]: Account[K]
}

// 全てのフィールドを再び必須にする
type Account3 = {
  [K in keyof OptionalAccount]-?: Account[K]
}




