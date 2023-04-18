type Subsequence<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First] | [First, ...Subsequence<Rest>] | Subsequence<Rest>
  : []
