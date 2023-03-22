import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TLengthOfString<''>, 0>>,
  Expect<Equal<TLengthOfString<'kumiko'>, 6>>,
  Expect<Equal<TLengthOfString<'reina'>, 5>>,
  Expect<Equal<TLengthOfString<'Sound! Euphonium'>, 16>>,
]
