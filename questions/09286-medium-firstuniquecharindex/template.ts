type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = [],
> = T extends ''
  ? -1
  : T extends `${infer F}${infer R}`
  ? F extends U[number]
    ? FirstUniqueCharIndex<R, [...U, F]>
    : R extends `${infer _}${F}${infer __}`
    ? FirstUniqueCharIndex<R, [...U, F]>
    : U['length']
  : -1
