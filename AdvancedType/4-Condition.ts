{
  type Check<T> = T extends string ? boolean : number; // 타입 조건체크
  type Type = Check<string>; // boolean

  type TypeName<T> = T extends string ?
    'string' : T extends number ?
      'number' : T extends boolean ?
        'boolean' : T extends undefined ?
          'undefined' : T extends Function ?
            'function' : object

  type T0 = TypeName<string> // string
  type T1 = TypeName<{ t: 123 }> // object
}