type UnionToIntersection<U> =
  // 返回联合类型的fn
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown // 满足extends条件，那么R必须是超集 即 &
    ? R
    : never
