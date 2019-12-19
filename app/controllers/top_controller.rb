class TopController < ApplicationController

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
    @comment = Comment.new(comment_params)
    if @comment.save
      TopUser.create(user_id: @comment.user_id, top_id: @comment.top_id)
      redirect_to top_index_path
    end
  end

  def comment_params
    params.require(:comment).permit(:top_id, :user_id, :word)
  end
end

