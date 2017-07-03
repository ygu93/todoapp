Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.


  field :allTodos do
    type types[Types::TodoType]
    description 'All Todos'
    resolve -> (obj, args, ctx) { Todo.all }
  end

  field :todo do
    type Types::TodoType
    argument :id, !types.ID
    description "Find a Todo by ID"
    resolve ->(obj, args, ctx) {
      Todo.find(args[:id])
    }
  end

  
end
