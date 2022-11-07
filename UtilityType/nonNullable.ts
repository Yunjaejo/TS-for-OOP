type T1 = string | null | undefined | void;
type T2 = NonNullable<T1> // null, undefined 제외시킨다.