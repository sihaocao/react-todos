import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  addTodo(todo) {
    // Ensure the todo text is not empty
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({
        value: ''
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className='btn btn-primary'
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}
