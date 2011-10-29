# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Story.all.each do |story|
  story.destroy
end
Story.create(:image=> "yigenanhai.jpg", :text => "从前，有一个小男孩儿，他叫作方方。他有一个暗恋的小女孩儿，叫作圆圆。(Once upon a time, there was a boy named FangFang. He likes a girl called YuanYuan.)", :order => 1, :level => 1)
Story.create(:image=> "yuanyuan1.jpg", :text => "可是。。。(but...);圆圆一直梦想嫁给一个会编程的黑客，然后能赚很多钱，就像脸谱网的扎克伯格～(YuanYuan would only date a top coder);方方很伤心，很伤心，但是方方是一个乐观坚强的孩子，于是。。。;他决定努力学习编程，成为一个“黑客”(So FangFang vowed to become a top hacker)！;故事就这样开始了。。。(So our story begins...)", :order => 2, :level => 1)
Story.create(:image=> "coding2.jpg", :text => "寂寞的方方每天都努力的编程、学习，从早到晚。他经常会梦到圆圆，于是早晨起来之后就更有动力了。(So FangFang studied hard, night and day. He is motivated... destined perhaps)", :order => 3, :level => 2)
Story.create(:image=> "faxianwangzhan4.jpg", :text => "方方开始制作他的第一个产品，但是还是菜鸟一个，很多都不懂。有一天他发现了一个叫作Tech Crunch的网站，学到了很多很多东西。(FangFang made a product, but there's still a lot he doesn't know. He often reads TechCrunch to learn more);方方觉得他离圆圆越来越近了。。。(He feels he's getting closer and closer to YuanYuan)", :order => 4, :level => 3)
Story.create(:image=> "kaifu2.jpg", :text => "有一天，方方在大街上闲逛，遇到了一个姓开的先生。开先生说，你要去创业，现在有出息的同学都去创业了！(One day, FangFang met an old man named Kai-Foo. Kai-Foo said, you should start startup!)", :order => 5, :level => 4)
Story.create(:image=> "fendou3.jpg", :text => "方方很收启发，于是他打算开始创业。并且把这个消息告诉了圆圆(So FangFang started a startup);圆圆很开心。。。(YuanYuan notices, and is happy...)", :order => 6, :level => 4)
Story.create(:image=> "chuangbanwangzhan.jpg", :text => "方方决定做一个教大家编程的网站，让更多的人可以做出来自己的想要的产品，实现自己的理想。(FangFang decides to create a site that teachers people how to code. This way he can help others reach their dreams);圆圆成了方方产品的第一个用户，于是他们天天在一起，方方编程，圆圆测试！(YuanYuan becomes his first user. They are together everyday. FangFang codes, YuanYuan tests", :order => 7, :level => 5)
Story.create(:image=> "tianshitouzi.jpg", :text => "方方的创业项目得到了天使投资，越来越多的人开始学习编程。(FangFang got funding for his project. More and more people have come to learn to code.)", :order => 8, :level => 6)
Story.create(:image=> "zuihou5.jpg", :text => "圆圆很开心，终于答应做方方的女朋友。;寂寞的男孩通过学习编程得到了美女和事业，你还在等什么？(A lonely boy becomes a hacker, achieves his goals, and gets the girl. What are you waiting for?); 结束 - The End...", :order => 9, :level => 6)
