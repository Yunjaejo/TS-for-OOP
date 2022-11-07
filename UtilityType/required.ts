interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Required<User> = { // 모든 옵셔널 프로퍼티를 필수로 바꿔준다.
  id: 1,
  name: "Bob",
  age: 30
}