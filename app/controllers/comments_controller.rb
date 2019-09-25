class CommentsController < ApplicationController
  before_action :set_comment, only: [:destroy]

  def new
    @message = Message.find(params[:message_id])
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    redirect_to "/messages/#{@comment.message.id}"
  end

  def destroy
    if current_user.id == @comment.user_id  #もしログインしているユーザーidとコメントしたユーザーidが同じであれば
      @comment.destroy  #コメントを削除する。
      redirect_to message_path(@comment.message.id)  #コメント削除をしたらmessages/showへリダイレクトする。
    else
      redirect_to root_path  #ユーザidとコメントしたユーザーidが等しくなければトップページへリダイレクトさせる。
    end
  end


private
  def comment_params
    params.require(:comment).permit(:text, :message_id).merge(message_id: params[:message_id], user_id: current_user.id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

end