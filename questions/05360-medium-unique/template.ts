type Unique<T extends any[], M extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Includes<M, First> extends true
    ? Unique<Rest, M>
    : Unique<Rest, [...M, First]>
  : M
