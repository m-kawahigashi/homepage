class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @messages = Message.where(user_id: current_user.id).page(params[:page]).per(4).order("created_at DESC")
  end
end
