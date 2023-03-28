type Diff<O extends object, O1 extends object> = {
  [key in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: (O &
    O1)[key]
}
