// type FormArray<
//   T extends number,
//   Arr extends unknown[] = [],
// > = Arr['length'] extends T ? Arr : FormArray<T, [unknown, ...Arr]>

// type MinusOne<T extends number> = FormArray<T> extends [
//   arr: any,
//   ...arr2: infer Rest,
// ]
//   ? Rest['length']
//   : never

type NumberLiteral = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type MinusOneMap = {
  '0': '9'
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}

// 字符串相关的工具函数
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : ''

type RemoveLeadingZeros<S extends string> = S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
  ? RemoveLeadingZeros<R>
  : S

// 去尾
type Initial<T extends string> =
  ReverseString<T> extends `${infer _}${infer Rest}` ? ReverseString<Rest> : T

type ParseInt<T extends string> =
  RemoveLeadingZeros<T> extends `${infer Digit extends number}` ? Digit : never

type MinusOneForString<S extends string> =
  S extends `${Initial<S>}${infer Last extends NumberLiteral}`
    ? Last extends '0'
      ? `${MinusOneForString<Initial<S>>}${MinusOneMap[Last]}`
      : `${Initial<S>}${MinusOneMap[Last]}`
    : never

type MinusOne<T extends number> = T extends 0
  ? -1
  : ParseInt<MinusOneForString<`${T}`>>
