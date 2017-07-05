import React from 'react';

const TodoIndexItem = ({ todo, finishTodo, setTodo }) => {

  const _handleClick = () => {
    finishTodo({variables: {id: todo.id}})
  }

  return (
      <li className='todo-index__item' onClick={ () => setTodo(todo)}>
        <span>{todo.title}</span>
        <button onClick={_handleClick}>{todo.done ? 'Undo' : 'Done'}</button>
      </li>
  )
}

export default TodoIndexItem
