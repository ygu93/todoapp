import React from 'react';
import { gql } from 'react-apollo';

class TodoDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.todo ? this.props.todo.title : "",
      body: this.props.todo ? this.props.todo.body : "",
      disableTitle: true,
      disableBody: true
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this._toggleInput = this._toggleInput.bind(this);
    this._updateForm = this._updateForm.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.todo){
      let todo = nextProps.todo
      this.setState({ title: todo.title, body: todo.body, done: todo.done })
    }
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

  handleUpdate(){
    if(this.state.title === ""){
      alert('Title cannot be blank');
      return;
    }
    this.props.updateTodo({ variables: { id: this.props.todo.id, body: this.state.body, title: this.state.title, done: this.props.todo.done  }})
  }

  _updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  _toggleInput(label){
    return () => this.setState({[label]: !this.state[label] })
  }

  render(){
    let todo = this.props.todo;
    if(todo === null){
      return null;
    }else{
      return(
        <div className='todo-details'>
          <input type='text' className='todo-details__title'
                             onMouseEnter={this._toggleInput('disableTitle')}
                             onMouseLeave={this._toggleInput('disableTitle')}
                             value={this.state.title}
                             onChange={this._updateForm('title')}
                             disabled={this.state.disableTitle}></input>
          <input type='text' className='todo-details__status'
                             disabled={true}
                             value ={`Status:  ${ todo.done ? 'Finished' : 'Unfinished'}`}></input>
          <label>Description:</label>
          <input type='text' className='todo-details__body'
                             onMouseEnter={this._toggleInput('disableBody')}
                             onMouseLeave={this._toggleInput('disableBody')}
                             disabled={this.state.disableBody}
                             value={this.state.body}
                             onChange={this._updateForm('body')}></input>

          <button className='todo-details__save' onClick={this.handleUpdate}>Save Todo</button>
          <button className='todo-details__delete' onClick={this.handleDelete}>Delete Todo</button>
        </div>
      )
    }
  }
}

export default TodoDetails
