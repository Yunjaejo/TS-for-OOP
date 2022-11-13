{
  /*
  타입의 프로퍼티들을 옵셔널하게 바꾼다.
   */
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  }

  function updateTodo(todoData: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todoData,
      ...fieldsToUpdate
    }
  }

  // 기존 데이터
  const todo: ToDo = {
    title: 'learn TS',
    description: 'study',
    label: 'study',
    priority: 'low',
  }
  // 갱신 내용
  const updateThing: Partial<ToDo> = {
    description: 'study hard!!!',
    priority: 'high'
  }
  // 갱신된 데이터
  const updatedTodo = updateTodo(todo, updateThing)

  console.log(updatedTodo);
}