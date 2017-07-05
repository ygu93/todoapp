import TodoIndex from './todo_index';
import { compose, graphql, gql } from 'react-apollo';

const finishTodo = gql`
  mutation finishTodo($id: Int!){
    finishTodo(id: $id){
      id
      title
      body
      done
    }
  }
`

export default compose(
graphql(
  gql`
  query {
    allTodos {
      id
      title
      body
      done
    }
  }
  `, ),
  graphql(finishTodo,{ name: 'finishTodo'})
)(TodoIndex)
