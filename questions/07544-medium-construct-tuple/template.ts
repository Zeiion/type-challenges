type ConstructTuple<
  L extends number,
  T extends any[] = [],
> = T['length'] extends L ? T : ConstructTuple<L, [...T, unknown]>
