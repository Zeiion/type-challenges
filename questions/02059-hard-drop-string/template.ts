type DropString<S extends string, R extends string> = DropChar<
  S,
  StringToUnion<R>
>
