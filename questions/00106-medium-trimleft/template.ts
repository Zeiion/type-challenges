type ignore = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${ignore}${infer Rest}`
  ? TrimLeft<Rest>
  : S
