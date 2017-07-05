import TodoIndex from './todo_index';
import { graphql, gql } from 'react-apollo';

export default graphql(
  gql`
  query {
    allTodos {
      id
      title
      body
    }
  }
`)(TodoIndex)
