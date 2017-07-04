import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO,
       } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todoReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;

  }
};

export default todoReducer;
