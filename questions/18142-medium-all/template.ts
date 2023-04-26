type All<T extends any[], ele> = T extends [infer F, ...infer R]
  ? Equal<F, ele> extends true
    ? All<R, ele>
    : false
  : true
