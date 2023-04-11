type FormArray<
  T extends number,
  Arr extends unknown[] = [],
> = Arr['length'] extends T ? Arr : FormArray<T, [unknown, ...Arr]>

type AddNum<T extends number, U extends number> = [
  ...FormArray<T>,
  ...FormArray<U>,
]['length']

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends unknown[] = [],
> = T extends [infer First, ...infer Rest]
  ? Start extends End
    ? [...U, ...T]
    : U['length'] extends Start
    ? Fill<Rest, N, AddNum<Start, 1> & number, End, [...U, N]>
    : Fill<Rest, N, Start, End, [...U, First]>
  : U
