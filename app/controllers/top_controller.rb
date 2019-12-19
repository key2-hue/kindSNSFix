class TopController < ApplicationController

  def new
    @top = Top.new
  end

  def index
    @topics = Top.all.order(created_at: "DESC");
  end

  def show
    @eachTopic = Top.find(params[:id]);
    @comment = Comment.new
    @top = TopUser.new;
    @commentAll = Comment.where(top_id: @eachTopic).order(created_at: "ASC");
    @user = current_user.id
  end

  def create
    @top = Top.new(top_params)
    if @top.save
      redirect_to top_index_path
    end
  end

  def top_params
    params.require(:top).permit(:title, :genre, :content)
  end

  
end

