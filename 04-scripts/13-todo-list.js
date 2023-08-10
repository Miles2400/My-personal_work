let todoList = JSON.parse(localStorage.getItem("todoList")) || []


function displayTodoList() {
   let todoListHtml = '';

   todoList.forEach((value, index) => {

      let todoObject = value;
      //let name = todoObject.name;
      // let dueDate = todoObject.dueDate;
      //OR
      let { name, dueDate } = todoObject;
      let html =
         `<div>${name} </div>
         <div>${dueDate}</div>
      <button onclick ="
      removeTodoList(${index})
      displayTodoList() 
      " class="del-btn">Delete</button>`;
      todoListHtml += html;
   });
   document.querySelector('.js-todo-div').innerHTML = todoListHtml;

}



document.querySelector(".add-btn").addEventListener(("click"), () => {

   const inputElement = document.querySelector('.js-todo-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todoList.push({
      name: name,
      dueDate: dueDate
   });

   localStorage.setItem("todoList", JSON.stringify(todoList));

   inputElement.value = '';
   displayTodoList();
})

function removeTodoList(index) {
   todoList.splice(index, 1);
   localStorage.setItem("todoList", JSON.stringify(todoList));
   displayTodoList()
}