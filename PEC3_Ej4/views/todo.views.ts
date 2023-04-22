/**
 * @class View
 *
 * Visual representation of the model.
 */
class TodoView {
  app:HTMLElement;  
  form:HTMLElement;
  //input:HTMLElement;  //InputElement;
  input:HTMLInputElement;

  submitButton:HTMLElement;
  title:HTMLElement;
  todoList:HTMLElement;
  _temporaryTodoText: string;

  constructor() {
    this.app = <HTMLElement>this.getElement("#root");
    this.form = this.createElement("form");
    
    this.input = <HTMLInputElement>this.createElement("input");
    
    // this.input.setAttribute("type","text");
    // this.input.setAttribute("placeholder","Add todo");
    // this.input.setAttribute("name","todo");

    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    
    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  get _todoText() {

    let input2:HTMLInputElement;

    input2 = <HTMLInputElement>this.input;

    return input2.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  createElement(tag:string, className?:string):HTMLElement {
    const element = document.createElement(tag);

    if (typeof className !== 'undefined') element.classList.add(className);

    return element;
  }

  getElement(selector:string):HTMLElement {
    const element = <HTMLElement>document.querySelector(selector);

    return element;
  }

  displayTodos(todos: Todo[]) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = <HTMLInputElement>this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = <HTMLSpanElement>this.createElement("span");
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  _initLocalListeners() {
    this.todoList.addEventListener("input", event => {
      
      let element:HTMLElement;
      element = <HTMLElement>event.target;

      if (element.className === "editable") {
        this._temporaryTodoText = element.innerText;
      }
      
    });
  }

  bindAddTodo(handler:Function) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler:Function) {
    this.todoList.addEventListener("click", event => {
      
      let element:HTMLElement;
      element = <HTMLElement>event.target;

      if (element.className === "delete") {
        const id = element.parentElement!.id;  //no compruebes tipos

        handler(id);
      }
    });
  }

  // bindEditTodo(handler) {
  //   this.todoList.addEventListener("focusout", event => {
  //     if (this._temporaryTodoText) {
  //       const id = event.target.parentElement.id;

  //       handler(id, this._temporaryTodoText);
  //       this._temporaryTodoText = "";
  //     }
  //   });
  // }

  // bindToggleTodo(handler) {
  //   this.todoList.addEventListener("change", event => {
  //     if (event.target.type === "checkbox") {
  //       const id = event.target.parentElement.id;

  //       handler(id);
  //     }
  //   });
  // }
}
