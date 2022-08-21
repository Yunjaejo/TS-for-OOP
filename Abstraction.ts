{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    beans: number;
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    beans: number
    makeCoffee(shots: number): CoffeeCup;

    fillCoffeeBeans(shots: number): void;

    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    get beans(): number {
      return this.coffeeBeans
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

  // const maker = new CoffeeMachine(32); constructor 를 private 으로 두어 사용 불가능. 스태틱 메소드로만 인스턴스 생성 가능
  const maker: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker.coffeeBeans += 5 멤버변수 coffeeBeans 를 private 으로 두었기에 에러가 남
  // maker.fillCoffeeBeans(5); 인터페이스에 명시되지 않은 메소드는 사용할 수 없당
  console.log(maker);
  maker.makeCoffee(2); // grind, preheat, extract 등을 모두 추상화함

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(42);
  console.log(maker2.beans);
  maker2.makeCoffee(6);
  console.log(maker2.beans);
  maker2.fillCoffeeBeans(28);
  console.log(maker2.beans);
  maker2.clean();

}