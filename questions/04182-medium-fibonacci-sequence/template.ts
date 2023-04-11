type Fibonacci<
  T extends number,
  F1 extends any[] = [],
  F2 extends any[] = [unknown],
  index extends any[] = [unknown],
> = index['length'] extends T
  ? F2['length']
  : Fibonacci<T, F2, [...F1, ...F2], [unknown, ...index]>
