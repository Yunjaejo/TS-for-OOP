{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  const BEANS_GRAM_PER_SHOT = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < BEANS_GRAM_PER_SHOT * shots) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= BEANS_GRAM_PER_SHOT * shots;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}