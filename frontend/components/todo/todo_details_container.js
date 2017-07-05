import { graphql, compose, gql } from 'react-apollo';
import TodoDetails from './todo_details';

const deleteTodo = gql `
  mutation deleteTodo($id: Int!){
    deleteTodo(id: $id){
      id
      title
      body
      done
    }
  }
`

const updateTodo = gql `
  mutation updateTodo($id: Int!, $title: String!, $body:String!, $done: Boolean!){
    updateTodo(id: $id, title: $title, body:$body, done:$done){
      id
      title
      body
      done
    }
  }
`

export default compose(
  graphql(deleteTodo, { name: 'deleteTodo' }),
  graphql(updateTodo, { name: 'updateTodo' })
)(TodoDetails)
