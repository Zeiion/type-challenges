type MyAwaited<T extends Promise<any>> = T extends PromiseLike<infer U>
  ? U extends Promise<any>
    ? MyAwaited<U>
    : U
  : never
