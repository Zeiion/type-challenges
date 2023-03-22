type AppendToObject<T, U extends keyof any, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V
}
// type AppendToObject<T, U, V> = Copy<
//   T & {
//     [key in U & string]: V
//   }
// >
