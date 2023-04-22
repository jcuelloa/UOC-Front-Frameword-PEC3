"use strict";
/**
 * @class View
 *
 * Visual representation of the model.
 */
class TodoView {
    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = this.createElement("input");
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
        let input2;
        input2 = this.input;
        return input2.value;
    }
    _resetInput() {
        this.input.value = "";
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (typeof className !== 'undefined')
            element.classList.add(className);
        return element;
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        }
        else {
            // Create nodes
            todos.forEach(todo => {
                const li = this.createElement("li");
                li.id = todo.id;
                const checkbox = this.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;
                const span = this.createElement("span");
                span.contentEditable = "true";
                span.classList.add("editable");
                if (todo.complete) {
                    const strike = this.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
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
            let element;
            element = event.target;
            if (element.className === "editable") {
                this._temporaryTodoText = element.innerText;
            }
        });
    }
    bindAddTodo(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }
    bindDeleteTodo(handler) {
        this.todoList.addEventListener("click", event => {
            let element;
            element = event.target;
            if (element.className === "delete") {
                const id = element.parentElement.id; //no compruebes tipos
                handler(id);
            }
        });
    }
    bindEditTodo(handler) {
        this.todoList.addEventListener("focusout", event => {
            if (this._temporaryTodoText) {
                let element;
                element = event.target;
                const id = element.parentElement.id;
                console.log("voy a llamar a mannejador del edit");
                handler(id, this._temporaryTodoText);
                this._temporaryTodoText = "";
            }
        });
    }
    bindToggleTodo(handler) {
        this.todoList.addEventListener("change", event => {
            let element;
            element = event.target;
            if (element.type === "checkbox") {
                const id = element.parentElement.id;
                handler(id);
            }
        });
    }
}
