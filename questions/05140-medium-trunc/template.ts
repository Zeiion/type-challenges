type Trunc<T extends number | string> = `${T}` extends `${infer A}.${infer _}`
  ? A extends ''
    ? '0'
    : A
  : `${T}`
