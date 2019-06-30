class MessagesController < ApplicationController

  def index
    @messages = Message.page(params[:page]).per(4).order("created_at DESC")
  end

  def new
  end

  def create
    @messages = Message.create(message_params)
  end

  private
  def message_params
    params.permit(:name, :image, :text)
  end

end
