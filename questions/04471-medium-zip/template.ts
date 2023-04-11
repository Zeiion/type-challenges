type Zip<T extends readonly any[], U extends readonly any[]> = T extends [
  infer First,
  ...infer Rest,
]
  ? U extends [infer First2, ...infer Rest2]
    ? [[First, First2], ...Zip<Rest, Rest2>]
    : []
  : []
