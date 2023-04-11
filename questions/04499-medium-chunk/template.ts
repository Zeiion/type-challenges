/* eslint-disable @typescript-eslint/indent */
type Chunk<
  T extends any[],
  C extends number,
  U extends any[] = [],
> = U['length'] extends C
  ? [U, ...Chunk<T, C>]
  : T extends [infer First, ...infer R]
  ? Chunk<R, C, [...U, First]>
  : U extends []
  ? U
  : [U]
