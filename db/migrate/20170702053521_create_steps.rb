class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title, null:false
      t.string :description
      t.integer :todo_id, null:false
    end
  end
end
