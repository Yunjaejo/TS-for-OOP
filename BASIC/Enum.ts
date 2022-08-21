{
  // Enum
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(Days.Tuesday);

  let day: Days = Days.Saturday;
  day = 92;
  console.log(day);
  // Enum 타입으로 할당한 변수 day 에 다른 값이 할당 가능함... 0~6 이지만 92가 가능하다?!!!

  // 이를 Union 타입으로 사용하기
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

  let today: DaysOfWeek = 'Wednesday'
  console.log(today);
  today = 'Monday'
}