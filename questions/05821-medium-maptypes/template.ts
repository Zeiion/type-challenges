type MapTypes<
  T extends Record<keyof any, any>,
  R extends {
    mapFrom: any
    mapTo: any
  },
> = {
  [key in keyof T]: T[key] extends R['mapFrom']
    ? R extends { mapFrom: T[key] }
      ? R['mapTo']
      : never
    : T[key]
}
