class GamesController < ApplicationController
  # GET /games
  # GET /games.xml
  def index
    @games = Game.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @games }
    end
  end

  # GET /games/1
  # GET /games/1.xml
  def show
    # @game = Game.find_by_level_id(params[:id])
    @level_id = params[:id] ? params[:id].to_i : 1
    if @level_id > 15 && @level_id != 42
      @level_id = 15
    end

    @blurb = get_blurb(@level_id.to_i)
    @avatar = get_avatar(@level_id.to_i)
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @game }
    end
  end

  def get_blurb(level)
    if(level < 3)
      "noob"
    elsif level < 6
      "coding monkey"
    elsif level < 9
      "senior engineer"
    elsif level < 12
      "rockstar ninja"
    else
      "Master Hacker!"
    end
  end
  
  def get_avatar(level)
    if(level < 3)
      "1sad.png"
    elsif level < 6
      "2fighting.png"
    elsif level < 9
      "3bingo.png"
    elsif level < 12
      "4happy.png"
    else
      "5cool.png"
    end
  end
  # GET /games/new
  # GET /games/new.xml
  def new
    @game = Game.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @game }
    end
  end

  # GET /games/1/edit
  def edit
    @game = Game.find(params[:id])
  end

  # POST /games
  # POST /games.xml
  def create
    @game = Game.new(params[:game])

    respond_to do |format|
      if @game.save
        format.html { redirect_to(@game, :notice => 'Game was successfully created.') }
        format.xml  { render :xml => @game, :status => :created, :location => @game }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @game.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /games/1
  # PUT /games/1.xml
  def update
    @game = Game.find(params[:id])

    respond_to do |format|
      if @game.update_attributes(params[:game])
        format.html { redirect_to(@game, :notice => 'Game was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @game.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.xml
  def destroy
    @game = Game.find(params[:id])
    @game.destroy

    respond_to do |format|
      format.html { redirect_to(games_url) }
      format.xml  { head :ok }
    end
  end
end
