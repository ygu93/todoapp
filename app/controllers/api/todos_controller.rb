class Api::TodosController < ApplicationController
  def query
    result = Schema.execute params[:query]
    render json: result
  end

  def index
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.done = false
    @todo.save!
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
