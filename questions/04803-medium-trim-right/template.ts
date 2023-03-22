type TrimRight<S extends string> = S extends `${infer Rest}${ignore}`
  ? TrimRight<Rest>
  : S
