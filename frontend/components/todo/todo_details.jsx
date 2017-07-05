import React from 'react';
import { gql } from 'react-apollo';

class TodoDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.todo ? this.props.todo.id : null ,
      title: this.props.todo ? this.props.todo.title : null,
      body: this.props.todo ? this.props.todo.body : null,
      done: this.props.todo ? this.props.todo.done : null
    }
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props)
  }

  handleDelete(){
    this.props.deleteTodo({ variables: { id: this.props.todo.id }, refetchQueries: [{
      query: gql`
      query {
        allTodos {
          id
          title
          body
          done
        }
      }
      `
    }] });

    this.props.unsetTodo();
  }

  render(){
    let todo = this.props.todo;
    if(todo === null){
      return null;
    }else{
      return(
        <div className='todo-details'>
          <h2 className='todo-details__title'>{todo.title}</h2>
          <div className='todo-details__status'>Status:   {todo.done ? 'Finished' : 'Unfinished'}</div>
          <section className='todo-details__body'>Description:   {todo.body ? todo.body : ""}</section>
          <button className='todo-details__delete' onClick={this.handleDelete}>Delete Todo</button>
        </div>
      )
    }
  }
}

export default TodoDetails
