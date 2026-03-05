class Category < ApplicationRecord
  has_many :expenses, dependent: :destroy

  validates :name, uniqueness: { case_sensitive: false }, format: { with: /\S/, message: "is invalid" }
end
