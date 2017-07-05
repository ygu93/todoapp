import createTodo from './create_todo';
import { graphql, gql } from 'react-apollo';

const createTodoMutation = gql `
  mutation createTodo($title: String!, $body: String!){
    createTodo(title: $title, body: $body) {
      id
      title
      body
      errors
    }
}
`


const CreateTodoContainer = graphql(createTodoMutation)(createTodo);

export default CreateTodoContainer
