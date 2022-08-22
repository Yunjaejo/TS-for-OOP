{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasSugar?: boolean
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother{
    private steamMilk(): boolean {
      console.log('Steaming Milk...');
      return true
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const existMilk = this.steamMilk();
      return {
        ...cup,
        hasMilk: existMilk,
      };
    }
  }

  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from candy');
      return true
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const existSugar = this.getSugar()
      return {
        ...cup,
        hasSugar: existSugar,
      }
    }
  }

  interface CoffeeMaker {
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
      console.log(`grinding beans for ${shots} shots...`);
      if (this.coffeeBeans < shots + CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
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
    constructor(private beans: number, private milkFother: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetLatteMachine extends CoffeeMachine {
    constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = this.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee))
    }
  }
}