type Join<T extends string[], U extends number | string> = T extends [
  infer First extends string,
  ...infer Rest extends string[],
]
  ? Rest['length'] extends 0
    ? `${First}`
    : `${First}${U}${Join<Rest, U>}`
  : ''

// type Join2<T extends string[], U extends number | string> = T extends [
//   infer First extends string,
//   ...infer Rest extends string[],
// ]
//   ? `${U}${First}${Join2<Rest, U>}`
//   : ''

// type Join<
//   T extends string[],
//   U extends number | string,
//   J = Join2<T, U>,
// > = J extends `${infer _ extends string}${infer Rest}` ? Rest : ''
