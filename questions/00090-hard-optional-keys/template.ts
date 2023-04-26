type OptionalKeys<
  T extends Record<keyof any, any>,
  keys = keyof T,
> = keys extends keyof T ? ({} extends Pick<T, keys> ? keys : never) : never
