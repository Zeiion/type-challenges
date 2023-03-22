type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never
    ? T[key]
    : DeepReadonly<T[key]>
}

/* eslint-disable @typescript-eslint/indent */
// type DeepReadonly<T> = T extends Record<string, any>
//   ? T extends Function
//     ? T
//     : {
//         readonly [key in keyof T]: DeepReadonly<T[key]>
//       }
//   : T extends [infer First, ...infer Rest]
//   ? [DeepReadonly<First>, DeepReadonly<Rest>]
//   : T
