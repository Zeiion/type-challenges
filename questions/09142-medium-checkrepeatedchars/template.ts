type CheckRepeatedChars<
  T extends string,
  U = never,
> = T extends `${infer First}${infer Rest}`
  ? First extends U
    ? true
    : CheckRepeatedChars<Rest, U | First>
  : false
