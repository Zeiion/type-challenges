type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ): Chainable<Omit<T, K> & { [key in K]: V }> // strange
  get(): T
}
