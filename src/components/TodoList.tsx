import React from 'react'

import Todo from "./Todo"

interface Props {
  todos: Todo[],
  toggleTodo: ToggleTodo,
}

const TodoList = ({todos, toggleTodo}: Props) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo todo={todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  )
}

export default TodoList;