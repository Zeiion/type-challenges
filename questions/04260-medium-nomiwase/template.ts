/* eslint-disable @typescript-eslint/indent */
type AllCombinations<
  S extends string,
  U extends string = StringToUnion<S>,
> = IsNever<U> extends true
  ? ''
  :
      | {
          [key in U]: `${key}${AllCombinations<'', Exclude<U, key>>}`
        }[U]
      | ''
