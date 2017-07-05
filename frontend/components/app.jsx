import React from 'react';
import TodoIndexContainer from './todo/todo_index_container';
import TodoDetailsContainer from './todo/todo_details_container';
import NavContainer from './nav/nav_container';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTodo: null
    }
    this.setTodo = this.setTodo.bind(this);
    this.unsetTodo = this.unsetTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
  }

  setTodo(todo){
    this.setState({ selectedTodo: todo });
  }

  checkTodo(todo){
    if(this.state.selectedTodo !== null){
      if(todo.id === this.state.selectedTodo.id){
        this.setState({selectedTodo: Object.assign({}, this.state.selectedTodo, { done: !this.state.selectedTodo.done})})
      }
    }
  }

  unsetTodo(){
    this.setState({ selectedTodo: null })
  }

  render(){
    return(
      <div>
        <NavContainer/>
        <div className = 'app'>
          <TodoIndexContainer setTodo={this.setTodo.bind(this)} checkTodo={this.checkTodo.bind(this)}/>
          <TodoDetailsContainer todo={this.state.selectedTodo} unsetTodo={this.unsetTodo.bind(this)}/>
        </div>
      </div>
    )
  }

}


export default App;
