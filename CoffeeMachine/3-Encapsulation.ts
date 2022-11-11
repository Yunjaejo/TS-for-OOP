{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // 프로퍼티를 외부에서 접근하지 못하게 제한
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker { // 생성자가 아닌 static 메서드로 인스턴스 생성
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < CoffeeMaker.BEANS_GRAM_PER_SHOT * shots) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= CoffeeMaker.BEANS_GRAM_PER_SHOT * shots;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    private internalAge = 4;

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    get fullName(): string {
      return `${ this.firstName } ${ this.lastName }`;
    }

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('나이가 왜 0보다 작지??')
      }
      this.internalAge = num;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // getter, setter 는 일반 멤버변수처럼 호출

  user.age = 6
  console.log(user.fullName);
}