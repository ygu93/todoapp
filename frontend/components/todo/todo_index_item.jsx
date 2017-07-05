import React from 'react';

const TodoIndexItem = ({ todo, finishTodo }) => {

  const _handleClick = () => {
    finishTodo({variables: {id: todo.id}})
  }

  return (
      <li className='todo-index__item'>
        <span>{todo.title}</span>
        <button onClick={_handleClick}>{todo.done ? 'Undo' : 'Done'}</button>
      </li>
  )
}

export default TodoIndexItem
