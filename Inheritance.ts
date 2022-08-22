{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    beans: number;

    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    get beans(): number {
      return this.coffeeBeans;
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value for beans should be greater than 0!!');
      }
      this.coffeeBeans += coffeeBeans;
    }

    clean(): void {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots + CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
      console.log(`grinding beans for ${shots} shots...`);
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    steamMilk(): void {
      console.log('Steaming Milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }

  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}