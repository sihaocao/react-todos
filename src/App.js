import React, { Component } from 'react';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'Make dinner' },
      { id: 2, text: 'Fold laundry' },
      { id: 3, text: 'Make website' }
    ],
    nextId: 4
  };

  addTodo = todoText => {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='todo-wrapper'>
          <Header />
          <TodoInput todoText='' addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
