type Without<T, U> = T extends [infer First, ...infer Rest]
  ? U extends any[]
    ? Includes<U, First> extends true
      ? Without<Rest, U>
      : [First, ...Without<Rest, U>]
    : First extends U
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : T
