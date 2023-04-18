type LastIndexOf<T extends any[], U> = T['length'] extends 0
  ? -1
  : T extends [...infer First, infer Rest]
  ? Equal<Rest, U> extends true
    ? First['length']
    : LastIndexOf<First, U>
  : 0

// type LastIndexOf<
//   T extends any[],
//   U,
//   index extends any[] = [],
//   num extends any[] = [],
//   has = false,
// > = T['length'] extends 0
//   ? has extends true
//     ? num['length']
//     : -1
//   : T extends [infer First, ...infer Rest]
//   ? Equal<First, U> extends true
//     ? LastIndexOf<Rest, U, [...index, any], index, true>
//     : LastIndexOf<Rest, U, [...index, any], num, has>
//   : 0
