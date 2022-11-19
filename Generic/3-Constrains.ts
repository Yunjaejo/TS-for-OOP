interface Employee {
  pay(): void;
}

class FullTime implements Employee {
  pay(): void {
    console.log('full time!');
  }

  workFullTime() {
  }
}

class PartTime implements Employee {
  pay(): void {
    console.log('part time!');
  }

  workPartTime() {
  }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 구리다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

const yunjae = new FullTime();
const bob = new PartTime();

const yunjaeAfterPay = payBad(yunjae);
const bobAfterPay = payBad(bob);

// Good practice
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}


function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj1 = { name: 'yunjae'};
const obj2 = { age: 20 };
const obj3 = { gender: 'male', isStudent: false};

console.log(getValue(obj1, 'name'));
console.log(getValue(obj2, 'age'));
console.log(getValue(obj3, 'isStudent'));

