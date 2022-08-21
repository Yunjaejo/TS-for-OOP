{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // public
  // private: 외부에서 접근 불가능
  // protected: private 이지만 자식클래스에서는 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater than 0!!');
      }
      this.coffeeBeans += coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots + CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32); constructor 를 private 으로 두어 사용 불가능. 스태틱 메소드로만 인스턴스 생성 가능
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans += 5 멤버변수 coffeeBeans 를 private 으로 두었기에 에러가 남
  maker.fillCoffeeBeans(5); // 메소드로 멤버변수 컨트롤, 0보다 작으면 에러가 발생하게 코드 작성

  console.log(maker);

  //

  class User {
    private internalAge = 3;

    get fullName(): string {
      return this.firstName + this.lastName;
    }

    get age(): number { // getter, private 한 멤버변수 값을 가져올 때 쓴다
      return this.internalAge;
    }

    set age(age: number) { // setter, private 한 멤버변수 값을 수정할 때 쓴
      if (age > 0) {
        this.internalAge = age;
      } else {
        throw new Error('value for age should be greater than 0!!')
      }
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const newUser = new User('Kim', 'Andy');
  console.log(newUser.fullName);

  console.log(newUser.age);
  newUser.age = 35;
  console.log(newUser.age);
}