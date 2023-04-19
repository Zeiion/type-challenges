type GetMiddleElement<T extends any[]> = T extends [
  infer _,
  ...infer R,
  infer __,
]
  ? R extends []
    ? T
    : GetMiddleElement<R>
  : T
