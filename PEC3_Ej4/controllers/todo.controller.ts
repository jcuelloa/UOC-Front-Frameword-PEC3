/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
  
  service: TodoService;
  view: any;    /////*********cambiar tipo */
  
  constructor(service: TodoService, view: any) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
//    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = (todos: Todo[]) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: string) => {
    this.service.addTodo(todoText);
  };

  // handleEditTodo = (id: any, todoText: any) => {
  //   this.service.editTodo(id, todoText);
  // };

  handleDeleteTodo = (id: string) => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string) => {
    this.service.toggleTodo(id);
  };
}