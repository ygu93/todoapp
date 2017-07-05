import React from 'react';
import { gql } from 'react-apollo';

class CreateTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      focus: false
    }
    this._handleSave = this._handleSave.bind(this);
    this._changeFocus = this._changeFocus.bind(this);
    this._updateForm = this._updateForm.bind(this);
  }

  _handleSave(e){
    e.preventDefault();
    if(this.state.title === ""){
      alert('Title cannot be blank');
      return;
    }
    this.props.mutate({ variables: { title:this.state.title, body:this.state.body }, refetchQueries: [{
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
    }]});
    this.setState({title: "", body: "", focus: false});
  }

  _changeFocus(){
    this.setState({ focus: true });
  }

  _updateForm(label){
    return e => this.setState({[label]: e.target.value});
  }

  displayRest(){
    if(this.state.focus){
      return(
        <div>
          <input type = "text" placeholder = 'Description' onChange={this._updateForm('body')} value={this.state.body}/>
          <button>Add Task</button>
        </div>
      )
    }else{
      return ""
    }
  }

  render(){
    return(
      <form className = 'create-todo' onSubmit={this._handleSave}>
        <input type = "text" onFocus={this._changeFocus} placeholder = "Add a task..." className = 'create-todo__title' onChange={this._updateForm('title')} value={this.state.title}/>
        {this.displayRest()}
      </form>
    )
  }

}

export default CreateTodo;
