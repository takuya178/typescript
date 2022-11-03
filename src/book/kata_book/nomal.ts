type Tests<T> = T extends string ? string : number;


// 引 数 name を 持 つ 関 数 型 Test を 定 義 し な さ い
// name は string 型 も し く は number 型 を 取 り 、
// name が string 型 の と き は Test は boolean 型 を 返 し
// name が number 型 の と き は Test は number 型 を 返 し ま す
type Tests2 = <T extends string | number>(name: T)
  => T extends string ? boolean : number;


const TestArr = [1, 2, 3]
type Tests3<T> = T extends Array<infer X> ? X : T;
type Rule1 = Tests3<[1, 2, 3]>
type Rule2 = Tests3<typeof TestArr>
const cda: Tests3<typeof TestArr> = 1;



// Pick型
type Tests4 = {
  name : string ;
  age : number ;
  power : number ;
}

type MyPick<T, U extends keyof T> = {
  [P in U]: T[P]
}
type NameAndAgeTest = MyPick<Tests4, 'name' | 'age' | 'power'>



// NonNullable型
// 型からnullとかundefinedを消して新しい型を作る
type Test5 = 'test' | undefined | 'test2' | null | 'test3';
type MyNonNulllable<T> = T extends null | undefined ? never : T;
type checkKata = MyNonNulllable<Test5>;




// Partial型
type tests6 = {
  name : string ;
  age : number ;
  power : number ;
}
type partial<T> = {
  [P in keyof T]?: T[P] 
}
type Partialtest = partial<tests6>




type Tests5<T extends string | number>(name: T)
  => T extends string ? boolean : number;  
