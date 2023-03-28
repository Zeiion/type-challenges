type IsUnion<T, U = T> = [T] extends [never] // isNever
  ? false
  : T extends T
  ? [U] extends [T]
    ? false
    : true
  : false
