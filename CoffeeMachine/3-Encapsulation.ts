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
}