Mutations::MutationRoot = GraphQL::ObjectType.define do
  name "Mutation"

  field :createTodo, Types::TodoType do
    description "creates a Todo."

    # Use Input Types to define complex argument types
    argument :title, types.String
    argument :body, types.String

    resolve ->(t, args, c) {
      todo = Todo.new({title:args[:title], body:args[:body]})
      todo.done = false
      todo.save!
      todo
    }
  end

  field :deleteTodo, Types::TodoType do
    description "deletes a Todo."

    argument :id, types.Int

    resolve -> (t, args, c) {
      todo = Todo.find_by_id(args[:id])
      todo.destroy
      todo
    }
  end

  field :updateTodo, Types::TodoType do
    description "updates a Todo"

    argument :id, types.Int
    argument :title, types.String
    argument :body, types.String

    resolve -> (t, args, c) {
      todo = Todo.find_by_id(args[:id])
      todo.update({ title:args[:title], body:args[:body] })
      todo
    }

  end
end
