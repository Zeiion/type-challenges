type ObjectEntries<T> = {
  [key in keyof Required<T>]: [
    key,
    [Required<T>[key]] extends [never] ? undefined : Required<T>[key],
  ]
}[keyof Required<T>]
