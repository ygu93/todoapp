TodoAppSchema = GraphQL::Schema.define do
  query(Types::QueryType)
  mutation Mutations::MutationRoot
end
