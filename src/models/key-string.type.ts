export type KeyString<T, K extends keyof T> = T[K] extends string ? string : string;
