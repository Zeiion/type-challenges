type ToPrimitive<T> = T extends Record<keyof any, any>
  ? T extends (...args: any[]) => any
    ? Function
    : {
        [key in keyof T]: ToPrimitive<T[key]>
      }
  : T extends { valueOf: () => infer R }
  ? R
  : T
