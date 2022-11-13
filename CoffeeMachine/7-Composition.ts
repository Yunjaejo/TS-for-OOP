{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming Milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming Milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming Cold Milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar from candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CafeLatteMachine extends CoffeeMachine {

    constructor(coffeeBeans: number, public readonly serialNumber: string, private milkFrother: MilkFrother) {
      super(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {

    constructor(coffeeBeans: number, private sugar: SugarProvider) {
      super(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCafeLatteMachine extends CoffeeMachine {

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) { // 생성자로 클래스를 주입하는 것이 아니라 추상화된 클래스에 의존하기 !!
      super(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();

  const candySugarMixer = new CandySugarMixer();
  const sugarMixer = new SugarMixer();

  const cheapCandyMachine = new SweetCafeLatteMachine(12, cheapMilkSteamer, candySugarMixer)
  const cheapSugarMachine = new SweetCafeLatteMachine(12, cheapMilkSteamer, sugarMixer)

}