{
  // 타입의 인덱스로 해당 데이터타입 접근 가능

  const obj = {
    name: 'Andy',
  };

  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female',
  }

  type Name = Animal['name']; // string
  const text: Name = '조윤재';

  type Gender = Animal['gender']; // male or female

  type Keys = keyof Animal; // name or age or gender
  const key: Keys = 'age'

  type Person = {
    name: string;
    gender: Animal['gender'];
  }

  const person: Person = {
    name: '키키',
    gender: 'female'
  }
}