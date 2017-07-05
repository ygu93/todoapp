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
    console.log(this.props)
    this._handleSave = this._handleSave.bind(this);
    this._changeFocus = this._changeFocus.bind(this);
    this._updateForm = this._updateForm.bind(this);
  }

  _handleSave(){
    this.props.mutate({ variables: { title:this.state.title, body:this.state.body }, refetchQueries: [{
      query: gql`
      query {
        allTodos {
          id
          title
          body
        }
      }
      `
    }]});
    this.setState({title: "", body: ""});
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
          <input type = "text" placeholder = 'description' onChange={this._updateForm('body')} value={this.state.body}/>
          <button onClick={this._handleSave}>Add Task</button>
        </div>
      )
    }else{
      return ""
    }
  }

  render(){
    return(
      <div className = 'create-todo'>
        <input type = "text" onFocus={this._changeFocus} placeholder = "Add a task..." className = 'create-todo__title' onChange={this._updateForm('title')} value={this.state.title}/>
        {this.displayRest()}
      </div>
    )
  }

}

export default CreateTodo;
