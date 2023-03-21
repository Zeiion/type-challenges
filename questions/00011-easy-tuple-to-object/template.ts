type TupleToObject<T extends readonly (keyof any)[]> = {
  [key in T[number]]: key
}
