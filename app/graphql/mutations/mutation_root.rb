Mutations::MutationRoot = GraphQL::ObjectType.define do
  name "Mutation"

  field :createTodo, Types::TodoType do
    description "creates a Todo."

    argument :title, types.String
    argument :body, types.String

    resolve ->(t, args, c) {
      todo = Todo.new({title:args[:title], body:args[:body]})
      todo.done = false
      todo.save
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
    argument :done, types.Boolean

    resolve -> (t, args, c) {
      todo = Todo.find_by_id(args[:id])
      todo.update({ title:args[:title], body:args[:body] })
      todo
    }

  end

  field :finishTodo, Types::TodoType do
    description "marks todo as done"

    argument :id, types.Int

    resolve -> (t, args, c) {
      todo = Todo.find_by_id(args[:id])
      todo.update({ done: !todo.done })
      todo
    }

  end

  field :createStep, Types::StepType do
    description "creates a Step."

    argument :title, types.String
    argument :description, types.String
    argument :todo_id, types.Int

    resolve ->(t, args, c) {
      step = Step.new({title:args[:title], description:args[:description], todo_id: args[:todo_id]})
      step.save
      step
    }
  end

  field :deleteStep, Types::StepType do
    description "deletes a Step."

    argument :id, types.Int

    resolve -> (t, args, c) {
      step = Step.find_by_id(args[:id])
      step.destroy
      step
    }
  end

  field :updateStep, Types::StepType do
    description "updates a Step"

    argument :id, types.Int
    argument :title, types.String
    argument :description, types.String
    argument :todo_id, types.Int

    resolve -> (t, args, c) {
      step = Step.find_by_id(args[:id])
      step.update({ title:args[:title], description: args[:description], todo_id:args[:todo_id] })
      step
    }

  end
end
