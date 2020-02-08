class TopController < ApplicationController

  def new
    @top = Top.new
  end

  def index
    @topic = Top.order(created_at: "DESC").page(params[:page]).per(5)

    return nil if params[:keyword] == ""

    @searchTopic = Top.where('title LIKE ?', "#{params[:keyword]}%")
    
    

    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @eachTopic = Top.find(params[:id]);
    @comment = Comment.new
    @top = TopUser.new;
    @commentAll = Comment.where(top_id: @eachTopic).page(params[:page]).per(10).order(created_at: "ASC");
    
  end

  def create
    @top = Top.new(top_params)
    if @top.save
      redirect_to top_index_path
    end
  end

  def destroy
    @topUser = TopUser.where(top_id: params[:id])
    @topUser.destroy_all
    @comment = Comment.where(top_id: params[:id])
    @comment.destroy_all
    @top = Top.find(params[:id])
    @top.destroy
    
    redirect_to top_index_path
  end

  def update

  end

  def top_params
    params.require(:top).permit(:title, :genre, :content, :userName)
  end

  
end

