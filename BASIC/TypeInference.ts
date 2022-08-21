{
  // Type Inference(타입 추론), 원시 타입과 같은 간단한 타입은 생략가능
  let text = 'hello';
  text = 'hi';

  // 함수 인자에는 타입지정이 필요함. 추론 안되어 any 가 됨
  function printMessage(message) { // any
    console.log(message);
  }

  // 뻔한 결과는 추론하여 add 함수의 return 타입은 number 가 됨. 하지만 return 타입을 명시하여 가독성 좋은 코드 작성하기.
  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);


}