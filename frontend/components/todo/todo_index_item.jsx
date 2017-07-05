import React from 'react';

const TodoIndexItem = ({ todo, finishTodo, setTodo, checkTodo }) => {

  const _handleClick = () => {
    finishTodo({variables: {id: todo.id}});
    checkTodo(todo);
  }

  return (
      <li className='todo-index__item' onClick={ (e) => e.target.nodeName !== 'BUTTON' ? setTodo(todo) : ""}>
        <span>{todo.title}</span>
        <button onClick={_handleClick}>{todo.done ? 'Undo' : 'Done'}</button>
      </li>
  )
}

export default TodoIndexItem
