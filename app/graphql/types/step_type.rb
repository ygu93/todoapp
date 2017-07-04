Types::StepType = GraphQL::ObjectType.define do
  name "Step"
  description "Step of a Todo"
  field :id, types.Int
  field :title, types.String
  field :description, types.String
  field :errors, types[types.String], "Reasons Object could not be created/updated" do
    resolve ->(obj, args, ctx) { obj.errors.full_messages }
  end
end
