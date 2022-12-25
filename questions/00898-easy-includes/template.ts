type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false
// 很奇怪，复制一遍Equal才对

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer R]
  ? Equal<U, K> extends true
    ? true
    : Includes<R, U>
  : false
