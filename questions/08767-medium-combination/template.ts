type Combination<
  T extends string[],
  U = T[number],
  Item = U,
> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<U, Item>>}`
  : never
