type Filter<T extends any[], P> = T extends [infer F, ...infer R]
  ? F extends P
    ? [F, ...Filter<R, P>]
    : Filter<R, P>
  : []

// type Filter<T extends any[], P, ans extends any[] = []> = T extends [
//   infer F,
//   ...infer R,
// ]
//   ? F extends P
//     ? Filter<R, P, [...ans, F]>
//     : Filter<R, P, ans>
//   : ans
