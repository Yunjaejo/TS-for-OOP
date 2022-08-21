{
  // Type Assertion(타입 강제)
  function oldStrFunc(): any {
    return 'hello';
  }

  const result = oldStrFunc();
  console.log((result as string).length);
  // result as string == <string>result
  // oldStrFunc() 함수의 리턴타입은 any 이다. 하지만 이것이 string 이라고 장담할 때 타입캐스팅으로 string 의 메소드를 사용할 수 있다.

  function wrongFunc(): number[] | undefined {
    return undefined;
  }

  const numbers = wrongFunc();
  numbers!.push(3)
  // numbers 는 무조건 배열이다 라고 장담할 때 사용하는 느낌표. 위험함
}