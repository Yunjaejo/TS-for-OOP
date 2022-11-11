{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7;
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker { // 생성자가 아닌 static 메서드로 인스턴스 생성
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3); // static 메서드로 CoffeeMaker 인스턴스 생성
  console.log(maker2);
}