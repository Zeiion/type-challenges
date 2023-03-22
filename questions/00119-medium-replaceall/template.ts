type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer Before}${From extends '' ? never : From}${infer After}`
  ? `${Before}${To}${ReplaceAll<After, From, To>}`
  : S
