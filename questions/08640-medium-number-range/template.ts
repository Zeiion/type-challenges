type NumberRange<
  L extends number,
  R extends number,
  tmp extends any[] = FormArray<L>,
  Res = never,
> = tmp['length'] extends R
  ? R | Res
  : NumberRange<L, R, [...tmp, any], tmp['length'] | Res>
