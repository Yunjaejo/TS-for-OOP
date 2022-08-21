{
  // Intersection
  type Student = {
    name: string
    score: number
  }

  type Worker = {
    employeeId: number
    work: () => void
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.work());
  }

  let intern = {
    name: 'Jo',
    score: 93,
    employeeId: 123,
    work: () => {}
    // internWork 함수에 쓰이는 매개변수로 type Student 와 Worker 에 해당하는 프로퍼티 모두 필요함
  }

  internWork(intern)
}