type RequiredByKeys<T, K extends keyof T = keyof T> = Copy<
  Omit<T, K> & {
    [key in K]-?: T[key]
  }
>
