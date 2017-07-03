Types::StepType = GraphQL::ObjectType.define do
  name "Step"
  description "Step of a Todo"
  field :title, types.String
  field :description, types.String
end
