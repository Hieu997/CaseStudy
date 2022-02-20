let todolist = new TodoList();
function showResult() {
  todolist.add();
}
function ButtonEdit(index) {
  todolist.edit(index);
}
function buttonDelete(index) {
  todolist.delete(index);
}
