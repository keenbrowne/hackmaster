# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)


Story.create(:image=> "yigenanhai.jpg", :text => "从前，有一个小男孩儿，他叫作方方。他有一个暗恋的小女孩儿，叫作圆圆。", :order => 1, :level => 1)
Story.create(:image=> "yigenanhai.jpg", :text => "可是。。。;圆圆一直梦想嫁给一个会编程的黑客，然后能赚很多钱，就像脸谱网的扎克伯格～;方方很伤心，很伤心，但是方方是一个乐观坚强的孩子，于是。。。;他决定努力学习编程，成为一个“黑客”！", :order => 2, :level => 1)
Story.create(:image=> "beijing.jpg", :text => ";故事就这样开始了。。。", :order => 3, :level => 1)
Story.create(:image=> "kaifu.jpg", :text => "寂寞的方方每天都努力的编程、学习，从早到晚。他经常会梦到圆圆，于是早晨起来之后就更有动力了。", :order => 4, :level => 2)