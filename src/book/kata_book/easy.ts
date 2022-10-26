type Test =  {
  [key: string]: number;
}

const Test2 = {
  name: 'test',
  value: '2',
} as const

type Testkey = keyof typeof Test2;

type TestValue = typeof Test2[Testkey];



const Test = ['one', 'two', 'three'] as const
type TestValue2 = typeof Test[number];


const Keys = ['name', 'test'] as const
type Test2 = {
  [key in typeof Keys[number]]: number
}



type Name = 'taro' | 'shiro'
type Family = 'yamada' | 'tanaka'

type Names = `${Name} ${Family}`


type Test3 = {
  [key: string]: number
}

type TestKey = keyof typeof Test2;
type TestValues= typeof Test2[keyof typeof Test2]

type TestList = typeof Test[number]

type TestOb = {
  [key in typeof Keys[number]]: number
}



