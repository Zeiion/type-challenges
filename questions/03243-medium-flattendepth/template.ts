/* eslint-disable @typescript-eslint/indent */
type FlattenDepth<T, Time extends number = 1> = Time extends 0
  ? T
  : T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...FlattenDepth<First, MinusOne<Time>>, ...FlattenDepth<Rest, Time>]
    : [First, ...FlattenDepth<Rest, Time>]
  : T
