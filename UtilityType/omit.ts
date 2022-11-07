interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "W";
}

const admin: Omit<User, 'id' | 'name'> = { // 특정 프로퍼티 빼고 가져오기
  age: 30,
  gender: "M"
}