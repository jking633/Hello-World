import React from './node_modules/react'
import TodoList from './todoList'

export default function ActiveTodos({ todos, ...props }) {
  const filteredTodos = todos.filter(todo => !todo.completed)
  return <TodoList todos={filteredTodos} {...props} />
}
