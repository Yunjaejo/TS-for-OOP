{
  type ToDo = {
    title: string;
    description: string;
  }

  function display(todoData: Readonly<ToDo>) {
    // todoData.title = 'jaja' // 접근 불가능
  }
}