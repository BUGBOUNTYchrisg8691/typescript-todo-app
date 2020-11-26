import React, { useState } from 'react'

interface Props {
  addTodo: AddTodo,
}

export const AddTodoForm = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState('');

  return (
    <form>
      <input type="text" value={todo} onChange={(e) => {
        setTodo(e.target.value)
      }} />
      <button type="submit" onClick={(e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
      }}>Add Todo</button>
    </form>
  )
}