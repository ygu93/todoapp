import React from 'react';

const TodoIndexItem = ({ todo }) => {
  return (
      <li>
        <input type='checkbox'/>
        {todo.title}
      </li>
  )
}

export default TodoIndexItem
