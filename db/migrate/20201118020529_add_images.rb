class AddImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.text :link

      t.timestamps
    end
  end
end
