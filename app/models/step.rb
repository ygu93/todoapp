class Step < ApplicationRecord
  validates :title, presence: true
  belongs_to :todo
end
