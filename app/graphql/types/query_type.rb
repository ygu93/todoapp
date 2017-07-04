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

  field :allSteps do
    type types[Types::StepType]
    description 'All Steps'
    resolve -> (obj, args, ctx) { Step.all }
  end

  field :step do
    type Types::StepType
    argument :id, !types.Int
    description "Find a Step by ID"
    resolve -> (obj, args, ctx) {
      Step.find(args[:id])
    }
  end
end
