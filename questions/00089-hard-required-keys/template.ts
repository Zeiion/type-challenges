type RequiredKeys<
  T extends Record<keyof any, any>,
  keys = keyof T,
> = keys extends keyof T
  ? keys extends keyof GetRequired<T>
    ? keys
    : never
  : never
