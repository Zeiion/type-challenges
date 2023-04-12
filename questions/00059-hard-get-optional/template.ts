type GetOptional<T extends Record<keyof any, any>> = {
  [key in keyof T as {} extends Pick<T, key> ? key : never]: T[key]
}
