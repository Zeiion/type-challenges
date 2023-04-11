type Curried<F> = F extends (...args: infer A) => infer R
  ? A extends [infer First, ...infer Other]
    ? (arg: First) => Curried<(...args: Other) => R>
    : R
  : never
declare function Currying<F>(
  fn: F,
): Curried<F> extends Function ? Curried<F> : () => Curried<F> // TODO
