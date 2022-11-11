{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker { //
    private static BEANS_GRAM_PER_SHOT = 7; // 프로퍼티를 외부에서 접근하지 못하게 제한
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine { // 생성자가 아닌 static 메서드로 인스턴스 생성
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${ shots }`);
      if (this.coffeeBeans < CoffeeMachine.BEANS_GRAM_PER_SHOT * shots) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${ shots } shots...`);
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

  class CafeLatteMachine extends CoffeeMachine {

    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans)
    }

    private steamMilk(): void {
      console.log('Steaming Milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      this.steamMilk();
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = new CafeLatteMachine(23, 'SSSS');
  console.log(latteMachine.serialNumber);
  const coffee = latteMachine.makeCoffee(1);

  console.log(coffee);
}