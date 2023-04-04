type Mutable<T extends Record<keyof any, any>> = {
  -readonly [key in keyof T]: T[key]
}
