import React from 'react';
import TodoIndexContainer from './todo/todo_index_container';

const App = () => (
  <div>
    <h1 className='header'><span>Todo App</span></h1>
    <div className = 'app'>
    <TodoIndexContainer/>
    </div>
  </div>
);

export default App;
