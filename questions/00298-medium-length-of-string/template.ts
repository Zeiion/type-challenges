type TLengthOfString<
  S extends string,
  Arr extends string[] = [],
> = S extends `${infer First}${infer Rest}`
  ? TLengthOfString<Rest, [...Arr, First]>
  : Arr['length']
