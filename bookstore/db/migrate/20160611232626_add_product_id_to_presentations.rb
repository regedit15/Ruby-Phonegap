class AddProductIdToPresentations < ActiveRecord::Migration
  def change
    add_reference :presentations, :product, index: true, foreign_key: true
  end
end
