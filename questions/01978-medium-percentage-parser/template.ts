type PercentageCheck<A extends string> = A extends `${infer L}%`
  ? [L, '%']
  : [A, '']
type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends '+' | '-'
    ? [L, ...PercentageCheck<R>]
    : ['', ...PercentageCheck<A>]
  : ['', ...PercentageCheck<A>]
// type PercentageParser<
//   A extends string,
//   ans extends string[] = [],
// > = A extends `${infer First}${infer Rest}`
//   ? First extends '-' | '+'
//     ? PercentageParser<Rest, [First]>
//     : ans extends []
//     ? PercentageParser<A, ['']>
//     : A extends `${infer Before}%`
//     ? [...ans, Before, '%']
//     : [...ans, A, '']
//   : ans extends []
//   ? ['', '', '']
//   : [...ans, '', '']
