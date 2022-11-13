{
  type PositionType = {
    x: number;
    y: number;
  }

  interface PositionInterface {
    x: number;
    y: number;
  }

// obj
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, // merged. Line 42
  };

// Class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

// 확장
  interface ZPositionInterface extends PositionInterface { // extends
    z: number;
  }

  type ZPositionType = PositionType & { z: number }; // intersection

// Only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

// Type aliases can use computed properties
  type Person = {
    name: string,
    age: number,
  }
  type Name = Person['name']; // string
  type NumberType = number;
  type Direction = 'left' | 'right';

//////////
  /*
  Type: 데이터의 타입, 변수 타이핑
  Interface: 규격, 구현해야 한다면 인터페이스 사용
   */
}