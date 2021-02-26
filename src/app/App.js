import React from 'react'
import { useSelector } from 'react-redux';
import { AddTodoField, FilterItem, TodoItem } from './../components/';
import './App.scss'

const App = () => {
  const { todoItems, filters, activeFilter } = useSelector((state) => state.todos)

  const filterTodos = (filter) => {
    switch (filter) {
      case 'all':
        return todoItems
      case 'completed':
        return todoItems.filter(todo => todo.completed)
      case 'current':
        return todoItems.filter(todo => !todo.completed)
      default: return []
    }
  }

  return (
    <div className="app">
      <h1 className="title">TODO APP</h1>

      <div className="container">
        <AddTodoField />

        <div className="filters">
          {filters.map((filter, i) => (
            <FilterItem
              key={i}
              filter={filter}
              filterTodos={filterTodos} />
          ))}
        </div>

        <div className="list">
          {filterTodos(activeFilter).map(item => <TodoItem key={item.id} todo={item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
