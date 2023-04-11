type Arguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never
type FlipArguments<T extends (...args: any[]) => any> = {
  (...args: Reverse<Arguments<T>>): ReturnType<T>
}
