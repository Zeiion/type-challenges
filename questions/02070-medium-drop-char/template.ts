type DropChar<S extends string, C> = S extends `${infer First}${infer Rest}`
  ? First extends C
    ? DropChar<Rest, C>
    : `${First}${DropChar<Rest, C>}`
  : ''
