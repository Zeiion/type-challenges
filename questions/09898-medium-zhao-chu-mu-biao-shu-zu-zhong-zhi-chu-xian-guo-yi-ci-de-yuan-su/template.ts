type FindEles<
  T extends any[],
  U extends any[] = [],
  ans extends any[] = [],
> = T extends [infer F, ...infer R]
  ? Includes<U, F> extends true
    ? FindEles<R, [...U, F], Without<ans, F>>
    : FindEles<R, [...U, F], [...ans, F]>
  : ans
