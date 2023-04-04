type TupleToNestedObject<T extends unknown[], U> = T extends [
  infer First extends keyof any,
  ...infer Rest,
]
  ? {
      [key in First]: TupleToNestedObject<Rest, U>
    }
  : U
