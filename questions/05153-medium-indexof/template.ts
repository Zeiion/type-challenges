type IndexOf<T extends any[], U, num extends any[] = []> = T['length'] extends 0
  ? -1
  : T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? num['length']
    : IndexOf<Rest, U, [any, ...num]>
  : 0
