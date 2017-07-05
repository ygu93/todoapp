# TodoApp

[Live Link](https://yue-todo-app.herokuapp.com/)

This is a todo application created with a Rails/PostgreSQL backend and uses GraphQL instead in place of a REST API. The front end is created in React/Redux with the data management of the Todos done with react-apollo

## GraphQL
To modify the backend GraphQL queries are created that modify our model in place of a controller
```ruby
field :deleteTodo, Types::TodoType do
  description "deletes a Todo."

  argument :id, types.Int

  resolve -> (t, args, c) {
    todo = Todo.find_by_id(args[:id])
    todo.destroy
    todo
  }
end
```

This is then connected to our front end with react-apollo, which allows us to attach queries and mutations to our components like so

```javascript
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
```

## Redux
To show that react-apollo can be used in conjunction with a Redux app, I am implemented a simple redux action that fetches random quotes from an API. Upon clicking the header in the top left, a new quote will be fetched from the API and displayed at the top




## Unimplemented Features
Adding steps/subtasks to each todo. While the backend for this feature is mostly complete, the front end that would be added on to the todo details component has not.

Another feature to add would be to allow the user to add tags to each Todo.
