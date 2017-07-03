Types::TodoType = GraphQL::ObjectType.define do
  name "Todo"
  description "A Todo"
  field :id, types.Int
  field :title, types.String
  field :body, types.String
  field :done, types.Boolean
  field :steps do
    type types[Types::StepType]
    resolve -> (obj, args, ctx) {
      obj.steps
    }
  end
end
