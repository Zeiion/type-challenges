/* eslint-disable @typescript-eslint/indent */
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly [...infer Rest]
  ? Equal<number, Rest['length']> extends true
    ? false
    : true
  : false

type tset = (readonly [1])['length']
