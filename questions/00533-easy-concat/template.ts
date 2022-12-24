type Concat<T, U> = T extends [...infer t]
  ? U extends [...infer u]
    ? [...t, ...u]
    : never
  : never
