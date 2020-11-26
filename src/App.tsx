import React, { useState } from 'react';

import TodoList from "./components/TodoList"
import { AddTodoForm } from "./components/AddTodoForm"

const initialTodos: Todo[] = [
  {
    todo: "Walk the dogs",
    completed: false,
  },
  {
    todo: "Feed the dogs",
    completed: false,
  },
  {
    todo: "Finish Todo App",
    completed: false,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    setTodos(todos.map((todo) => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    }));
  }

  const addTodo: AddTodo = (todo: string) => {
    setTodos([...todos, {todo: todo, completed: false}])
  }

  const clearCompleted: ClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div>
      Todo App + Typescript
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <button type="submit" onClick={() => {
        clearCompleted();
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
