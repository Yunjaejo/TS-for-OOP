interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: 'Bob',
};

// admin.id = 4; // Readonly 기에 수정 불가능