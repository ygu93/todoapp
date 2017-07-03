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
  field :errors, types[types.String], "Reasons Object could not be created/updated" do
    resolve ->(obj, args, ctx) { obj.errors.full_messages }
  end
end
