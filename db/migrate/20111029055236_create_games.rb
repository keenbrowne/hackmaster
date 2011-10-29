class CreateGames < ActiveRecord::Migration
  def self.up
    create_table :games do |t|
      t.string :intro      
      t.string :problem
      t.integer :level_id
      
      t.timestamps
    end
  end

  def self.down
    drop_table :games
  end
end
