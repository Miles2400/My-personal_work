const todoList = [];

function addTodo() {
   let inputElement = document.querySelector('.js-todo-input');
   let name = inputElement.value;

   todoList.push(name);
   console.log(todoList);

   inputElement.value = '';
}