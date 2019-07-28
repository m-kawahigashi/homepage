class MessagesController < ApplicationController
  before_action :move_to_index, except: [:index, :show]

  def index
    @messages = Message.includes(:user).page(params[:page]).per(4).order("created_at DESC")
    @message = Message.where('text LIKE(?)', "%#{params[:keyword]}%").order("created_at DESC").limit(4)
      respond_to do |format|
        format.html
        format.json
      end
  end

  def new
    @message = Message.new
  end

  def create
    Message.create(image: message_params[:image], text: message_params[:text], user_id: current_user.id)
    respond_to do |format|
      format.html { redirect_to "/messages" }
      format.json 
    end
  end

  def edit
    @message = Message.find(params[:id])
  end

  def update
    message = Message.find(params[:id])
    if message.user_id == current_user.id
      message.update(message_params)
    end
  end

  def show
    @message = Comment.new
    @messages = Message.find(params[:id])
    @comments = @messages.comments.includes(:user)
  end

  def destroy
    message = Message.find(params[:id])  #変数messageにmessageテーブルのmessage.idを代入。
    message.destroy if message.user_id == current_user.id  #もしmessage_idと現在ログインしているユーザーのidがマッチしていたら削除する処理。
  end

  private
  def message_params
    params.require(:message).permit(:image, :text)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
