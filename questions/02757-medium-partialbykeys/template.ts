type PartialByKeys<
  T extends Record<PropertyKey, any>,
  K extends keyof T = keyof T,
> = Copy<
  Omit<T, K> & {
    [key in K]?: T[key]
  }
>
