interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk1: UserKey = 'id'; // 가능
// const uk2: UserKey = 'job'; // 불가
