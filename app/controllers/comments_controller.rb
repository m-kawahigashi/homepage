class CommentsController < ApplicationController

  def new
    @message = Message.find(params[:message_id])
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    redirect_to "/messages/#{@comment.message.id}"
  end

private
  def comment_params
    params.require(:comment).permit(:text, :message_id).merge(message_id: params[:message_id], user_id: current_user.id)
  end

end

# Comment.create(text: comment_params[:text], message_id: comment_params[:message_id], user_id: current_user.id)