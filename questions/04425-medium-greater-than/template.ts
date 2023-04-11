/* eslint-disable @typescript-eslint/indent */
// type GreaterThan<
//   T extends number,
//   U extends number,
//   arr extends any[] = [],
// > = arr['length'] extends T
//   ? false
//   : arr['length'] extends U
//   ? true
//   : GreaterThan<T, U, [any, ...arr]>

// type FormArray<
//   T extends number,
//   Arr extends unknown[] = [],
// > = Arr['length'] extends T ? Arr : FormArray<T, [unknown, ...Arr]>

// // last test case is not passed
// type GreaterThan<
//   T extends number,
//   U extends number,
//   TA extends any[] = FormArray<T>,
//   UA extends any[] = FormArray<U>,
// > = UA extends [...any, ...TA] ? false : true // 优先false 处理相同长度情况

// TODO
type Digit = ToArray<'0123456789'>
type ToArray<T extends string | number> = `${T}` extends `${infer F}${infer R}`
  ? [F, ...ToArray<R>]
  : []
type Lengthy<T extends number | string> = ToArray<T>['length']
/** 最高位 */
type High<T extends string | number> = `${T}` extends `${infer F}${any}`
  ? F
  : ''
/** 更低位 */
type DigitLowerRest<T extends number | string> =
  `${T}` extends `${any}${infer R}` ? R : ''
/** 比较单个位 */
type DigitGreaterThan<
  T1 extends string | number,
  T2 extends string | number,
  U extends string[] = Digit,
> = T1 extends T2
  ? false
  : `${T1}` extends U[0]
  ? false
  : `${T2}` extends U[0]
  ? true
  : U extends [any, ...infer R extends string[]]
  ? DigitGreaterThan<T1, T2, R>
  : false

type GreaterThan<
  T extends number | string,
  U extends number | string,
> = Lengthy<T> extends Lengthy<U> // 位数相同，从高位开始比较
  ? `${T}${U}` extends ''
    ? false // 直到全部位都相同 return 相同
    : High<T> extends High<U>
    ? GreaterThan<DigitLowerRest<T>, DigitLowerRest<U>> // 当前位相同，比较更低位
    : DigitGreaterThan<High<T>, High<U>> // 当前位不同，retrun
  : GreaterThan<Lengthy<T>, Lengthy<U>> // 位数不同，比较位数大的
