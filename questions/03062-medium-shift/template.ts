type Shift<T extends unknown[]> = T extends [infer _, ...infer Rest] ? Rest : []
