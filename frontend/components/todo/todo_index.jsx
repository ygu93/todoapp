import React from 'react';
import TodoIndexItem from './todo_index_item';
import CreateTodoContainer from './create_todo_container';

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
      <div className='app-left'>
        <CreateTodoContainer/>
        <ul className="todo-index">
          {allTodos.map((todo, idx) => (
            <TodoIndexItem key={idx} todo={todo} finishTodo={this.props.finishTodo} setTodo={this.props.setTodo} checkTodo={this.props.checkTodo}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoIndex;
