class CreateStories < ActiveRecord::Migration
  def self.up
    create_table :stories do |t|
      t.string :image
      t.string :text
      t.integer :level, :limit => 1
      t.integer :order, :limit => 1
      
      t.timestamps
    end
  end

  def self.down
    drop_table :stories
  end
end
