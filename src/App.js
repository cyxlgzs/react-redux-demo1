import React, { Component } from 'react';
import AddTodo from './pages/AddTodo';
import AddTodoPage from './pages/AddTodoPage.js';
import TodoListPage from './pages/TodoList';
import FilterPage from './pages/Filter'


class App extends Component {
  render() {
    return (
      <div>
          <AddTodoPage />
          <TodoListPage />
          <FilterPage />
      </div>
    );
  }
}

export default App;
