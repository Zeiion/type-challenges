type Flip<T extends Record<keyof any, string | number | boolean>> = {
  [key in keyof T as `${T[key]}`]: key
}
