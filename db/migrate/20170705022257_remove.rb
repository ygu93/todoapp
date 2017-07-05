class Remove < ActiveRecord::Migration[5.1]
  def change
    change_column :todos, :body, :string, null: true
  end
end
