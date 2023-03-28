type RemoveIndexSignature<T extends Record<keyof any, any>> = {
  [key in keyof T as string extends key
    ? never
    : symbol extends key
    ? never
    : number extends key
    ? never
    : key]: T[key]
}
