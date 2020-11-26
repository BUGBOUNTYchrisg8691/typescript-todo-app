import React, { ReactElement } from 'react'

interface Props {
  todo: Todo,
  toggleTodo: ToggleTodo,
}

export default function Todo({todo, toggleTodo}: Props): ReactElement {
  return (
    <li>
      <label style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
        {todo.todo}
      </label>
    </li>
  )
}
