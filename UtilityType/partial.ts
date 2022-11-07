interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

let admin: Partial<User> = { // 프로퍼티를 옵셔널로 바꿔준다.
  id: 1,
  name: "Bob",
}