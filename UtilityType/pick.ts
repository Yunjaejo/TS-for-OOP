interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Pick<User, 'id' | 'name'> = { // 필요한 프로퍼티만 가져오기
  id: 0,
  name: 'Bob'
}