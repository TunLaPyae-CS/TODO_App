import React, { Component } from "react";
import Todos from "./SubComp/Todos";
import TodoSubmit from './SubComp/TodoSubmit'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Code" },
      { id: 2, content: "Run" },
      { id: 3, content: "Workout" },
    ],
  };
  todoDelete = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  todoAdd = (todo) => {
    let todos = [...this.state.todos,todo];
    this.setState({
      todos : todos,
    })
  };
  render() {
    return (
      <div className="todo-app container App">
        <h1 className="center blue-text">My first React App</h1>
        <Todos todos={this.state.todos} todoDelete={this.todoDelete} />
        <TodoSubmit todoAdd = {this.todoAdd}/>
      </div>
    );
  }
}

export default App;
