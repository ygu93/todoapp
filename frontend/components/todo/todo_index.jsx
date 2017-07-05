import React from 'react';
import TodoIndexItem from './todo_index_item';

class TodoIndex extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    if(!this.props.data.allTodos){
      return (
        <div>""</div>
      )
    }
    const { data: { allTodos } } = this.props;
    return(
      <ul className="todo-index">
        {allTodos.map((todo, idx) => (
          <TodoIndexItem key={idx} todo={todo}/>
        ))}
      </ul>
    )
  }
}

export default TodoIndex;
