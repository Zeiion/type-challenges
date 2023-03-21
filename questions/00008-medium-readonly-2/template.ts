type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} & {
  [key in keyof T as key extends K ? never : key]: T[key] // TODO 要 keyof T 才能保留原来的修饰符吗
}
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [key in K]: T[key]
// } & Omit<T, K>
