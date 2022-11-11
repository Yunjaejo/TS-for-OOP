{
  // Discriminated Union : type Success 와 Fail 에 공통된 속성 result 를 강제함으로 라인 25에서 분기처리 간편하고 직관적이게 가능함.
  type Login = Success | Fail
  type Success = {
    result: 'Success',
    response: {
      body: string;
    }
  }
  type Fail = {
    result: 'Fail',
    reason: string;
  }

  function login(): Login {
    return {
      result: 'Success',
      response: {
        body: 'log in!!'
      }
    };
  }

  function printLoginState(state: Login) {
    if (state.result === 'Success') {
      console.log(`Success!! ${state.response.body}`);
    } else {
      console.log(`Fail ㅠㅠ ${state.reason}`);
    }
  }
}