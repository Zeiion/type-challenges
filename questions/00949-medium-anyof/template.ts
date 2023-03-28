type Falsy = 0 | '' | false | undefined | null | [] | Record<keyof any, never>
type AnyOf<T extends readonly any[]> = T extends [
  infer First,
  ...infer Rest extends readonly any[],
]
  ? First extends Falsy
    ? AnyOf<Rest>
    : true
  : false
