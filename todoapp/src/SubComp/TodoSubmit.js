import React, { Component } from "react";

class TodoSubmit extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.todoAdd(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div className="something">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Add</label>
          <input type="text" id="name" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    );
  }
}

export default TodoSubmit;
