type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key
}
