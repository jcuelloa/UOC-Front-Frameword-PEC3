/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {

  todos: Todo[];
  onTodoListChanged!: Function;
  
  constructor() {
    //this.todos = [];
    
    this.todos = (JSON.parse(localStorage.getItem("todos")!) || []).map(
      (todo: {text: string; complete: boolean;}) => new Todo(todo)
    );


  }

  public bindTodoListChanged(callback:Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({text, complete:false}));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id:string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id:string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
