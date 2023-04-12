type GetRequired<T extends Record<keyof any, any>> = {
  [key in keyof T as {} extends Pick<T, key> ? never : key]: T[key]
}
