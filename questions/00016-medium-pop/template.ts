type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : T
