type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// Exclude<T1, T2> : T1 타입에서 T2 타입들 지우기