// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[],
//   EE = TupleToUnion<E>,
//   MM = TupleToUnion<M>,
// > = IsNever<EE> extends true
//   ? MM extends MM
//     ? `${B}--${MM & string}`
//     : never
//   : EE extends EE
//   ? IsNever<MM> extends true
//     ? `${B}__${EE & string}`
//     : MM extends MM
//     ? `${B}__${EE & string}--${MM & string}`
//     : never
//   : never

type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = `${B}${IsNever<E[number]> extends true ? '' : `__${E[number]}`}${IsNever<
  M[number]
> extends true
  ? ''
  : `--${M[number]}`}`
