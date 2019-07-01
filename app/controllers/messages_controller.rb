class MessagesController < ApplicationController
  before_action :move_to_index, except: :index

  def index
    @messages = Message.page(params[:page]).per(4).order("created_at DESC")
  end

  def new
  end

  def create
    Message.create(name: message_params[:name], image: message_params[:image], text: message_params[:text], user_id: current_user.id)
  end

  private
  def message_params
    params.permit(:name, :image, :text)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
