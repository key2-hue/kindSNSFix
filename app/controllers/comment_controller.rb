class CommentController < ApplicationController

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
